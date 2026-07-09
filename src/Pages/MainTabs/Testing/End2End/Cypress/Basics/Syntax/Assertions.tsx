import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Assertions = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/Syntax/Assertions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Assertions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Assertions;
