import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const State = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/CoreConcepts/PropsState/State';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Core Concepts - State" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default State;