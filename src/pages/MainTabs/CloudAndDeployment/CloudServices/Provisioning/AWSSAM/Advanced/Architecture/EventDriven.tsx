import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EventDriven = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSSAM/Advanced/Architecture/EventDriven';

  return (
    <>
      <PageLayout>
        <PageTitle title="Event-Driven" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventDriven;
