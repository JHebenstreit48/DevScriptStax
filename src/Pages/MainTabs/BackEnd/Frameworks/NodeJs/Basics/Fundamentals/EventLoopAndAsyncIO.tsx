import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventLoopAndAsyncIO = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Node/Basics/Fundamentals/EventLoopAsyncIO';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Node.js Basics - Event Loop & Async I/O" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventLoopAndAsyncIO;
