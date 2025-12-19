import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HandRolledFakes = () => {
  const markdownFilePath = 'Languages/Dart/Testing/FakesAndMocks/HandRolledFakes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Hand-rolled Fakes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandRolledFakes;
