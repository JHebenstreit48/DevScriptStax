import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CypressCLIAndConfiguration = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/ProjectStructure/CypressCLIAndConfiguration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress CLI & Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CypressCLIAndConfiguration;
