import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Directives = () => {
  const markdownFilePath = 'FrontEnd/Vue/Basics/CoreConcepts/Directives';

  return (
    <>
      <PageLayout>
        <PageTitle title="Directives" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Directives;
