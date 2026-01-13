import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventDriven = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Architecture/EventDriven';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Event-Driven" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventDriven;
