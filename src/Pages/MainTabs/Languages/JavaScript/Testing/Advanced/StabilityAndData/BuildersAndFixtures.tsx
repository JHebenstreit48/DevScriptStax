import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildersAndFixtures = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/StabilityAndData/BuildersAndFixtures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Builders & Fixtures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildersAndFixtures;
