import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Bindings = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Bindings';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bindings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Bindings;
