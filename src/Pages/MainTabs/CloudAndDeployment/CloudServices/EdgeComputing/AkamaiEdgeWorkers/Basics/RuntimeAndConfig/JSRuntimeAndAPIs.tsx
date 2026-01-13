import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSRuntimeAndAPIs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/RuntimeAndConfig/JSRuntimeAndAPIs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JS Runtime & APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSRuntimeAndAPIs;
