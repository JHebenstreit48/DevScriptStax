import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildersAndFixtures = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/StabilityAndData/BuildersAndFixtures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Builders & Fixtures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildersAndFixtures;
