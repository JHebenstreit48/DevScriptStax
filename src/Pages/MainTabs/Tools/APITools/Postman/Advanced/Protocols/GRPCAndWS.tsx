import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GRPCAndWS = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Protocols/GRPCAndWS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="gRPC & WS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GRPCAndWS;
