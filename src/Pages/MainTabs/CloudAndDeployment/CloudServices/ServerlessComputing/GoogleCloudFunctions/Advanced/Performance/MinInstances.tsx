import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MinInstances = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Performance/MinInstances';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Min Instances" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MinInstances;
