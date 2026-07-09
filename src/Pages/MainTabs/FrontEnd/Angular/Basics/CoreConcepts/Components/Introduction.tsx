import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath =
    'FrontEnd/Angular/Basics/CoreConcepts/Components/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Components - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;