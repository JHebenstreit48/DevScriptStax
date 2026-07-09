import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RootConfig = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Monorepos/RootConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="Root Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RootConfig;
