import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticGeneration = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/CoreConcepts/StaticGeneration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Static Generation (SSG)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticGeneration;
