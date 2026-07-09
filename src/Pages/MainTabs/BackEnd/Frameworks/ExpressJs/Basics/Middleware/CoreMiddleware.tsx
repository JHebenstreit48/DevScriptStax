import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreMiddleware = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/Middleware/CoreMiddleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreMiddleware;
