import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Middleware = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/CoreConcepts/Middleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Middleware;
