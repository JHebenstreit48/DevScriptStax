import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ShareableConfigs = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/Customization/ShareableConfigs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Shareable Configs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShareableConfigs;
