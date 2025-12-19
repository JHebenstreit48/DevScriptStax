import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Mocktail = () => {
  const markdownFilePath = 'Languages/Dart/Testing/FakesAndMocks/Mocktail';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="mocktail" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Mocktail;
