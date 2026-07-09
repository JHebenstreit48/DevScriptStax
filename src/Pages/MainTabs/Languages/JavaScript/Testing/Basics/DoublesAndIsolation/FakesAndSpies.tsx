import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FakesAndSpies = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/DoublesAndIsolation/FakesAndSpies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fakes & Spies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FakesAndSpies;
