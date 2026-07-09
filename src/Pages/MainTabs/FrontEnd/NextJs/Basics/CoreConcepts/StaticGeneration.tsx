import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StaticGeneration = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/CoreConcepts/StaticGeneration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static Generation (SSG)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticGeneration;
