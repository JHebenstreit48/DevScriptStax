import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworksAndDrivers = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Networking/NetworksAndDrivers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Networks & Drivers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworksAndDrivers;
