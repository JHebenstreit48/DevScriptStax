import path from 'node:path';
import { config } from '../config';
import {
  pascalize,
  sectionFolderName,
  topicFolderName,
  isGenericLeafName,
  safeLazyVarName,
} from './naming';

export type Derived = {
  sectionCrumb: string;
  topicCrumb: string;
  sectionFolder: string;
  topicFolder: string;

  topicPrefix: string[];
  groupFolders: string[];

  componentName: string;

  pageFsPath: string;
  pageImportPath: string;
  markdownFilePath: string;

  urlPath: string;
  pageTitle: string;
  lazyVarName: string;
};

export function derive(leaf: { urlPath: string; crumbs: string[] }): Derived {
  const [sectionCrumb = 'Misc', topicCrumb = 'Topic', ...rest] = leaf.crumbs;

  const sectionFolder = sectionFolderName(sectionCrumb);
  const topicFolder = topicFolderName(topicCrumb);

  const topicPrefix = config.topicFsPrefixMap?.[topicCrumb] ?? [];

  const groupsRaw = rest.slice(0, -1);
  const leafRaw = rest.at(-1) ?? 'Page';

  const groupFolders = groupsRaw.map((g) => config.groupFolderNameMap?.[g] ?? pascalize(g));
  const componentName = pascalize(leafRaw);

  const pageFsPath = path.join(
    process.cwd(),
    config.pagesRoot,
    sectionFolder,
    topicFolder,
    ...topicPrefix,
    ...groupFolders,
    `${componentName}.tsx`
  );

  const rel = [...topicPrefix, ...groupFolders, componentName].join('/');
  const pageImportPath = `@/Pages/MainTabs/${sectionFolder}/${topicFolder}/${rel}`;
  const markdownFilePath = `${sectionFolder}/${topicFolder}/${rel}`;

  const parentGroup = groupFolders.at(-1) ?? topicPrefix.at(-1);
  const pageTitle =
    isGenericLeafName(leafRaw) && parentGroup ? `${parentGroup}: ${leafRaw}` : leafRaw;

  const lazyVarName = safeLazyVarName([
    sectionFolder,
    topicFolder,
    ...topicPrefix,
    ...groupFolders,
    componentName,
  ]);

  return {
    sectionCrumb,
    topicCrumb,
    sectionFolder,
    topicFolder,
    topicPrefix,
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