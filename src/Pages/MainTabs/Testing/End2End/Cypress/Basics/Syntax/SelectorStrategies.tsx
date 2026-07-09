import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SelectorStrategies = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/SelectorStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Selector Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SelectorStrategies;
