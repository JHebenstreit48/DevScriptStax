import path from "node:path";
import { config } from "../config";
import { pascalize, sectionFolderName, isGenericLeafName, safeLazyVarName } from "./naming";

export type Derived = {
  sectionCrumb: string;
  topicCrumb: string;
  sectionFolder: string;
  topicFolder: string;

  // folders between topic and leaf
  groupFolders: string[];

  // leaf component/file name
  componentName: string;

  // filesystem targets
  pageFsPath: string;

  // imports
  pageImportPath: string;

  // markdown file path used by Notes
  markdownFilePath: string;

  // route url
  urlPath: string;

  // display title
  pageTitle: string;

  // used for unique lazy const name
  lazyVarName: string;
};

export function derive(leaf: { urlPath: string; crumbs: string[] }): Derived {
  const [sectionCrumb = "Misc", topicCrumb = "Topic", ...rest] = leaf.crumbs;

  const sectionFolder = sectionFolderName(sectionCrumb);
  const topicFolder = pascalize(topicCrumb);

  const groupsRaw = rest.slice(0, -1);
  const leafRaw = rest.at(-1) ?? "Page";

  const groupFolders = groupsRaw.map(pascalize);
  const componentName = pascalize(leafRaw);

  const pageFsPath = path.join(
    process.cwd(),
    config.pagesRoot,
    sectionFolder,
    topicFolder,
    ...groupFolders,
    `${componentName}.tsx`
  );

  const pageImportPath = `@/Pages/MainTabs/${sectionFolder}/${topicFolder}/${[...groupFolders, componentName].join("/")}`;
  const markdownFilePath = `${sectionFolder}/${topicFolder}/${[...groupFolders, componentName].join("/")}`;

  const parentGroup = groupFolders.at(-1);
  const pageTitle =
    isGenericLeafName(leafRaw) && parentGroup
      ? `${parentGroup}: ${leafRaw}`
      : leafRaw;

  const lazyVarName = safeLazyVarName([sectionFolder, topicFolder, ...groupFolders, componentName]);

  return {
    sectionCrumb,
    topicCrumb,
    sectionFolder,
    topicFolder,
    groupFolders,
    componentName,
    pageFsPath,
    pageImportPath,
    markdownFilePath,
    urlPath: leaf.urlPath,
    pageTitle,
    lazyVarName,
  };
}