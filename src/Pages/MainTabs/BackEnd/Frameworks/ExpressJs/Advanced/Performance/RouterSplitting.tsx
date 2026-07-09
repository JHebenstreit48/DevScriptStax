import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RouterSplitting = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Performance/RouterSplitting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Router Splitting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RouterSplitting;
