import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Performance = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/VisualAndPerf/Performance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Performance;
