import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Transitions = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Advanced/Concepts/Transitions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Transitions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Transitions;
