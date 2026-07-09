import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContextAPI = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Advanced/Concepts/ContextAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Context API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContextAPI;
