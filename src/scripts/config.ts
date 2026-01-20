export const config = {
  // Where to import the navigation root from (Subpage[])
  navEntryModule: '@/domain/navigation/mainTabs', // <- match your new structure

  // Output roots
  pagesRoot: 'src/Pages/MainTabs',
  routesSectionsRoot: 'src/routes/Sections',

  sectionNameMap: {
    'Front End': 'FrontEnd',
    'Back End': 'BackEnd',
    'GraphQL & Apollo': 'GraphQLAndApollo',
    'Cloud & Deploy': 'CloudAndDeployment',
    'Languages': 'Languages',
    'Testing': 'Testing',
    'Tools': 'Tools',
    'Stacks': 'Stacks',
  } as Record<string, string>,

  // Optional: override topic folder names
  topicNameMap: {
    // Keep empty unless you truly need it.
  } as Record<string, string>,

  // ✅ Same idea as backend: shorten group folder names deterministically
  groupFolderNameMap: {
    'Services/Dependency Injection': 'Services',
    'Authentication & Authorization': 'AuthenticationAuthorization',
    'RxJS & Reactive Programming': 'RxJSAndReactive',
  } as Record<string, string>,

  genericLeafNames: new Set([
    'Introduction',
    'Overview',
    'Basics',
    'Fundamentals',
    'Getting Started',
    'Setup',
  ]),

  defaultLimit: 10_000,
};