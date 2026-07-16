import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Alarms = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSSAM/Advanced/Observability/Alarms';

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
