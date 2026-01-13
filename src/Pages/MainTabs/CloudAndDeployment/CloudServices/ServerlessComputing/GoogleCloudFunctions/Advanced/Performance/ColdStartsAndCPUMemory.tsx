import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColdStartsAndCPUMemory = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Performance/ColdStartsAndCPUMemory';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cold Starts & CPU/Memory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColdStartsAndCPUMemory;
