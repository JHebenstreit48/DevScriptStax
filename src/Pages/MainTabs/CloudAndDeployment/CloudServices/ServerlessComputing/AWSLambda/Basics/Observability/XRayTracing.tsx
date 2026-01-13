import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const XRayTracing = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Observability/XRayTracing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="X-Ray Tracing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XRayTracing;
