import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Setup = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals: Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Setup;
