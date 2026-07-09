import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HooksAndLifecycle = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/HooksAndLifecycle';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hooks & Lifecycle" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HooksAndLifecycle;
