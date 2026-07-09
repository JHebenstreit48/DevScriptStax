import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ShareableConfigs = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/Customization/ShareableConfigs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Shareable Configs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShareableConfigs;
