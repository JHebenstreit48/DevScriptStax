import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FakesAndSpies = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/DoublesAndIsolation/FakesAndSpies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fakes & Spies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FakesAndSpies;
