import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
