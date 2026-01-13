import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BestPracticesInCypress = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/TestOptimization/BestPracticesInCypress';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Best Practices in Cypress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BestPracticesInCypress;
