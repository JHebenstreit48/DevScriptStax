import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClientCerts = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Security/ClientCerts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Client Certs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientCerts;
