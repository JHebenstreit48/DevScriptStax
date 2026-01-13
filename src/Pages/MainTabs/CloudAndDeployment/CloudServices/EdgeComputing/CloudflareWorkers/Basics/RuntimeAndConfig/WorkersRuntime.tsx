import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkersRuntime = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/RuntimeAndConfig/WorkersRuntime';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Workers Runtime" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkersRuntime;
