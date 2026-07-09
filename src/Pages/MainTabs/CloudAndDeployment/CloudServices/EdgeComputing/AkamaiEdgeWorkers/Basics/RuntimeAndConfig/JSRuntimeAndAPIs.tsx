import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JSRuntimeAndAPIs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/RuntimeAndConfig/JSRuntimeAndAPIs';

  return (
    <>
      <PageLayout>
        <PageTitle title="JS Runtime & APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSRuntimeAndAPIs;
