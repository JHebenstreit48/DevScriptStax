import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AlarmsAndCoordination = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/DurableObjects/AlarmsAndCoordination';

  return (
    <>
      <PageLayout>
        <PageTitle title="Alarms & Coordination" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AlarmsAndCoordination;
