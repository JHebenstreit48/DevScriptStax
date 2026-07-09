import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
