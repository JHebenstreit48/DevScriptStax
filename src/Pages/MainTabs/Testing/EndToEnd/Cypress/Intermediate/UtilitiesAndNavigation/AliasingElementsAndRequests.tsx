import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AliasingElementsAndRequests = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/UtilitiesAndNavigation/AliasingElementsAndRequests';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Aliasing Elements & Requests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AliasingElementsAndRequests;
