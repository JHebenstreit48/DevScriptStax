import { exists, writeText } from './fs';
import { countTsxFilesInDir, findSiblingDirWithSameTsxStems } from './scanExisting';

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
 * Updated rule (deep-nesting safe):
 * - If the expected leaf folder already has the expected # of .tsx files, skip.
 * - OR if any sibling folder under the same parent has the SAME set of expected .tsx stems, skip.
 *
 * (Count-only sibling matching causes false positives when many groups have the same size, e.g. lots of 2-page groups.)
 */
export function createPageIfMissing(args: {
  pageFsPath: string;
  componentName: string;
  markdownFilePath: string;
  pageTitle: string;

  // leaf group metadata
  expectedLeafCount: number;
  expectedStems: Set<string>;         // NEW
  leafFolderFsPath: string;
  leafFolderParentFsPath: string;

  dryRun?: boolean;
}): 'skipped' | 'created' {
  // If the file already exists exactly where we expect it, skip.
  if (exists(args.pageFsPath)) return 'skipped';

  // 1) If the expected leaf folder already has the exact expected # of .tsx files, skip all new files in it.
  const currentCount = countTsxFilesInDir(args.leafFolderFsPath);
  if (currentCount === args.expectedLeafCount && args.expectedLeafCount > 0) return 'skipped';

  // 2) If a sibling folder already has the same expected stems, treat it as "already done" and skip.
  const siblingMatch = findSiblingDirWithSameTsxStems(args.leafFolderParentFsPath, args.expectedStems);
  if (siblingMatch) return 'skipped';

  if (args.dryRun) return 'created';

  writeText(
    args.pageFsPath,
    makePageStub({
      componentName: args.componentName,
      markdownFilePath: args.markdownFilePath,
      pageTitle: args.pageTitle,
    })
  );

  return 'created';
}