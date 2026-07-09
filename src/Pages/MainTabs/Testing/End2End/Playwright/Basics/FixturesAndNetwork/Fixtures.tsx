import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Fixtures = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Basics/FixturesAndNetwork/Fixtures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fixtures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fixtures;
