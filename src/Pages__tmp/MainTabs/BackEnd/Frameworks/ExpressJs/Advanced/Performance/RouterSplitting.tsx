import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
