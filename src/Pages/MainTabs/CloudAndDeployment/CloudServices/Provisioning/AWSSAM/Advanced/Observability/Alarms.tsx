import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Alarms = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Observability/Alarms';

  return (
    <>
      <PageLayout>
        <PageTitle title="Alarms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Alarms;
