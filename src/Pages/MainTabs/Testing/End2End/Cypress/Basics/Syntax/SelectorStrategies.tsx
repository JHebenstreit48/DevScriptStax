import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
