import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TLSCertificatesManagement = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/PerformanceAndHardening/TLSCertificatesManagement';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TLS Certificates Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSCertificatesManagement;
