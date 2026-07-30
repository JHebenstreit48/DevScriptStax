import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StreamingAndFanout = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/FastlyCompute/Advanced/DataAndState/StreamingAndFanout';

  return (
    <>
      <PageLayout>
        <PageTitle title="Streaming & Fanout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StreamingAndFanout;
