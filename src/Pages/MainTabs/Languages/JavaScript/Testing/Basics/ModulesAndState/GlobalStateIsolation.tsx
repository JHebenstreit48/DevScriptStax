import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GlobalStateIsolation = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/ModulesAndState/GlobalStateIsolation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Global State Isolation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GlobalStateIsolation;
