import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScalingBestPractices = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/ScalingBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Scaling Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScalingBestPractices;
