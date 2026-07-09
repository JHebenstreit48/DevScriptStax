import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VisitGet = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/CoreCommands/VisitGet';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress Core Commands - Visit & Get" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VisitGet;