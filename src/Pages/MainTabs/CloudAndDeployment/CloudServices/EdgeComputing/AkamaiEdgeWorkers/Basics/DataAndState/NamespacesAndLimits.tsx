import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NamespacesAndLimits = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/DataAndState/NamespacesAndLimits';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Namespaces & Limits" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamespacesAndLimits;
