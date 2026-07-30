import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ColdStartsAndCPUMemory = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Performance/ColdStartsAndCPUMemory';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cold Starts & CPU/Memory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColdStartsAndCPUMemory;
