import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Mocktail = () => {
  const markdownFilePath = 'Languages/Dart/Testing/FakesAndMocks/Mocktail';

  return (
    <>
      <PageLayout>
        <PageTitle title="mocktail" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Mocktail;
