import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoreMiddleware = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Basics/Middleware/CoreMiddleware';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Core Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreMiddleware;
