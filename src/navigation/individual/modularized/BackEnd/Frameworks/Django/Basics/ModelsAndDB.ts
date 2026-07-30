import type { Subpage } from '@/types/navigation';

const ModelsAndDB: Subpage = {
  name: 'Models & DB',
  subpages: [
    {
      name: 'Defining Models',
      path: '/frameworks/django/basics/models-db/defining-models',
    },
    {
      name: 'Model Relationships',
      path: '/frameworks/django/basics/models-db/relationships',
    },
    {
      name: 'Migrations',
      path: '/frameworks/django/basics/models-db/migrations',
    },
    {
      name: 'ORM & QuerySets',
      path: '/frameworks/django/basics/models-db/orm-querysets',
    },
  ],
};

export default ModelsAndDB;