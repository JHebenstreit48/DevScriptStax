import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const ModelsAndDB: Subpage = {
  name: 'Models & DB',
  subpages: [
    {
      name: 'Defining Models',
      path: '/backend/frameworks/django/basics/models-db/defining-models',
    },
    {
      name: 'Model Relationships',
      path: '/backend/frameworks/django/basics/models-db/relationships',
    },
    {
      name: 'Migrations',
      path: '/backend/frameworks/django/basics/models-db/migrations',
    },
    {
      name: 'ORM & QuerySets',
      path: '/backend/frameworks/django/basics/models-db/orm-querysets',
    },
  ],
};

export default ModelsAndDB;