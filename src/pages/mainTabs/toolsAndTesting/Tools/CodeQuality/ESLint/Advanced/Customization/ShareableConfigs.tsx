import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
