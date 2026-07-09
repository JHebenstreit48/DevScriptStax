import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GRPCAndWS = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Protocols/GRPCAndWS';

  return (
    <>
      <PageLayout>
        <PageTitle title="gRPC & WS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GRPCAndWS;
