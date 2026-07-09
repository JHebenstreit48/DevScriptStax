import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
