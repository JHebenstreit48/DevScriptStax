import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BestPracticesInCypress = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/TestOptimization/BestPracticesInCypress';

  return (
    <>
      <PageLayout>
        <PageTitle title="Best Practices in Cypress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BestPracticesInCypress;
