import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventLoopAndAsyncIO = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Fundamentals/EventLoopAndAsync';

  return (
    <>
      <PageLayout>
        <PageTitle title="Node.js Basics - Event Loop & Async I/O" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventLoopAndAsyncIO;
