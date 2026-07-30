import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Debugging = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/CIAndDebug/Debugging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Debugging;
