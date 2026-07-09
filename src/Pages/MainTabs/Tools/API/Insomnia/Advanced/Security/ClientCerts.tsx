import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
