import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CISetup = () => {
  const markdownFilePath = 'Languages/Dart/Testing/QualityAndCI/CISetup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CI Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CISetup;
