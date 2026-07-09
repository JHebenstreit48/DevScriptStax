import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Basics = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/Routing/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Routing - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;