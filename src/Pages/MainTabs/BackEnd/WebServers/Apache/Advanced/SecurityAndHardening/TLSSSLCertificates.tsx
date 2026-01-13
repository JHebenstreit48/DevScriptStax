import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TLSSSLCertificates = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/SecurityAndHardening/TLSSSLCertificates';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TLS/SSL Certificates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSSSLCertificates;
