import path from "node:path";
import { exists, ensureDir, writeText } from "./fs";

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

export function createPageIfMissing(args: {
  pageFsPath: string;
  componentName: string;
  markdownFilePath: string;
  pageTitle: string;
  dryRun?: boolean;
}): "skipped" | "created" {
  if (exists(args.pageFsPath)) return "skipped";
  if (args.dryRun) return "created";

  ensureDir(path.dirname(args.pageFsPath));
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