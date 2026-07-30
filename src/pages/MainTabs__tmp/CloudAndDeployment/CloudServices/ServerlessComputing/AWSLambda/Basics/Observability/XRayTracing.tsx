import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const XRayTracing = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AWSLambda/Basics/Observability/XRayTracing';

  return (
    <>
      <PageLayout>
        <PageTitle title="X-Ray Tracing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XRayTracing;
