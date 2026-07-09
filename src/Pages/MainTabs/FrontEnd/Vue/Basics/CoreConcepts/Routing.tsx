import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Routing = () => {
  const markdownFilePath = 'FrontEnd/Vue/Basics/CoreConcepts/Routing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Routing;
