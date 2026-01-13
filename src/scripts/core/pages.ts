import path from "node:path";
import { exists, writeText } from "./fs";
import { countTsxFilesInDir, findSiblingDirWithTsxCount } from "./scanExisting";

export function makePageStub(opts: {
  componentName: string;
  markdownFilePath: string;
  pageTitle: string;
}) {
  const { componentName, markdownFilePath, pageTitle } = opts;

  return `import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ${componentName} = () => {
  const markdownFilePath = '${markdownFilePath}';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="${pageTitle}" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ${componentName};
`;
}

/**
 * Prevent duplicates when nav-derived folder names differ from your existing folder names.
 *
 * Rule:
 * - If the expected folder already contains the expected number of .tsx files for that leaf group, skip.
 * - OR if any sibling folder under the same parent has exactly that expected count, skip (prevents creating new "RxJSAndReactiveProgramming" when "RxJSAndReactive" already matches).
 *
 * To make this work, gen-pages.ts must pass `expectedLeafCount` and `leafFolderParentFsPath`.
 */
export function createPageIfMissing(args: {
  pageFsPath: string;
  componentName: string;
  markdownFilePath: string;
  pageTitle: string;

  // NEW: leaf group metadata
  expectedLeafCount: number;         // how many pages should exist in this leaf group folder
  leafFolderFsPath: string;          // folder where this page would live
  leafFolderParentFsPath: string;    // parent folder containing the leaf folder (for sibling checks)

  dryRun?: boolean;
}): "skipped" | "created" {
  // If the file already exists exactly where we expect it, skip.
  if (exists(args.pageFsPath)) return "skipped";

  // 1) If the expected leaf folder already has the exact expected # of .tsx files, skip all new files in it.
  const currentCount = countTsxFilesInDir(args.leafFolderFsPath);
  if (currentCount === args.expectedLeafCount && args.expectedLeafCount > 0) return "skipped";

  // 2) If a sibling folder already has the exact expected # of .tsx files, treat it as "already done" and skip.
  const siblingMatch = findSiblingDirWithTsxCount(args.leafFolderParentFsPath, args.expectedLeafCount);
  if (siblingMatch) return "skipped";

  if (args.dryRun) return "created";

  writeText(
    args.pageFsPath,
    makePageStub({
      componentName: args.componentName,
      markdownFilePath: args.markdownFilePath,
      pageTitle: args.pageTitle,
    })
  );

  return "created";
}