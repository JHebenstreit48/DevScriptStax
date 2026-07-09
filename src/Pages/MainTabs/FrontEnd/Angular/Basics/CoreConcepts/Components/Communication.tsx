import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Communication = () => {
  const markdownFilePath =
    "FrontEnd/Angular/Basics/CoreConcepts/Components/Communication";

  return (
    <>
      <PageLayout>
        <PageTitle title="Component Communication in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Communication;
