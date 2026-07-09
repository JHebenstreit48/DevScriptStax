import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Runtimes = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/RuntimeAndConfig/Runtimes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Runtimes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Runtimes;
