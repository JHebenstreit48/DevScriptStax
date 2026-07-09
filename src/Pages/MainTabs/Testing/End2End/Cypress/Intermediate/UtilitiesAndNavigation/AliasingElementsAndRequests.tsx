import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AliasingElementsAndRequests = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/UtilitiesAndNavigation/AliasingElementsAndRequests';

  return (
    <>
      <PageLayout>
        <PageTitle title="Aliasing Elements & Requests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AliasingElementsAndRequests;
