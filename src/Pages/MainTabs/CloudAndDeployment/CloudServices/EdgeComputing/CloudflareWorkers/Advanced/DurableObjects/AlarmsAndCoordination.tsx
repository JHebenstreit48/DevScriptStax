import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AlarmsAndCoordination = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/DurableObjects/AlarmsAndCoordination';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Alarms & Coordination" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AlarmsAndCoordination;
