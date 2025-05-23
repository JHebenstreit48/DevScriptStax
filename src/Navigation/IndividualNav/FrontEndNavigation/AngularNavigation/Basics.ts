import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AngularBasicsNavigation: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/angular/basics/fundamentals/intro'
        },
        {
          name: 'Creating & Running',
          path: '/angular/basics/fundamentals/creatingrunning'
        },
        {
          name: 'Understanding Angular CLI',
          path: '/angular/basics/fundamentals/angularcli'
        },
      ],
    },
    {
      name: 'Project Structure',
      subpages: [
        {
          name: 'Project Structure',
          path: '/angular/basics/projectstructure/folderfilestructure'
        },
        {
          name: 'Configuration Files',
          path: '/angular/basics/projectstructure/configfiles'
        },
        {
          name: 'Naming Conventions',
          path: '/angular/basics/projectstructure/namingconventions'
        }
      ],
    },
  ],
};

export default AngularBasicsNavigation;
