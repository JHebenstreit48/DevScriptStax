import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StateManagement = () => {
  const markdownFilePath = 'FrontEnd/Vue/Basics/CoreConcepts/StateManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="State Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StateManagement;
