import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HandRolledFakes = () => {
  const markdownFilePath = 'Languages/Dart/Testing/FakesAndMocks/HandRolledFakes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hand-rolled Fakes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandRolledFakes;
