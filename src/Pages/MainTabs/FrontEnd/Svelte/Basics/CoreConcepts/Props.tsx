import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Props = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Props';

  return (
    <>
      <PageLayout>
        <PageTitle title="Props" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Props;
