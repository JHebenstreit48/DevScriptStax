import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticCacheControl = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Performance/StaticCacheControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static Cache Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticCacheControl;
