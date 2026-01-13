import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StreamingAndFanout = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/DataAndState/StreamingAndFanout';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Streaming & Fanout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StreamingAndFanout;
