import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommandsAndChaining = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/CommandsAndChaining';

  return (
    <>
      <PageLayout>
        <PageTitle title="Commands & Chaining" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommandsAndChaining;
