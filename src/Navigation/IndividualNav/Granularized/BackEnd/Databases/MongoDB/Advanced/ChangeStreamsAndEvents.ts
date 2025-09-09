import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ChangeStreamsAndEvents: Subpage = {
  name: 'Change Streams & Events',
  subpages: [
    {
      name: 'Change Streams',
      path: '/mongodb/advanced/events/change-streams',
    },
    {
      name: 'Triggers & Outbox Pattern',
      path: '/mongodb/advanced/events/triggers-outbox',
    },
  ],
};

export default ChangeStreamsAndEvents;