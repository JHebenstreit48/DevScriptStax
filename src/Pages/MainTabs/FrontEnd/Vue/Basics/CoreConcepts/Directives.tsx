import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
