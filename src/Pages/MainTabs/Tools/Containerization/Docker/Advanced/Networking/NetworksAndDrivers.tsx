import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NetworksAndDrivers = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Networking/NetworksAndDrivers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Networks & Drivers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworksAndDrivers;
