import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConstructLibraries = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Optimization/ConstructLibraries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Construct Libraries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConstructLibraries;
