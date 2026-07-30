import type { Subpage } from '@/types/navigation';

const FilesAndStreams: Subpage = {
  name: 'Files & Streams',
  subpages: [
    {
      name: 'File I/O',
      path: '/frameworks/nodejs/basics/files-streams/file-io',
    },
    {
      name: 'Streams Basics',
      path: '/frameworks/nodejs/basics/files-streams/streams-basics',
    },
  ],
};

export default FilesAndStreams;