import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VCLInterop = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/FastlyCompute/Advanced/Integrations/VCLInterop';

  return (
    <>
      <PageLayout>
        <PageTitle title="VCL Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VCLInterop;
