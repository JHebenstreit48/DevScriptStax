import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
