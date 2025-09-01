import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ChangeStreamsAndEvents: Subpage = {
  name: 'Change Streams & Events',
  subpages: [
    {
      name: 'Change Streams',
      path: '/databases/mongodb/advanced/events/change-streams',
    },
    {
      name: 'Triggers & Outbox Pattern',
      path: '/databases/mongodb/advanced/events/triggers-outbox',
    },
  ],
};

export default ChangeStreamsAndEvents;