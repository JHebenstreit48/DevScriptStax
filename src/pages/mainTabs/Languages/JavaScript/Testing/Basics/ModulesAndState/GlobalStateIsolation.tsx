import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
