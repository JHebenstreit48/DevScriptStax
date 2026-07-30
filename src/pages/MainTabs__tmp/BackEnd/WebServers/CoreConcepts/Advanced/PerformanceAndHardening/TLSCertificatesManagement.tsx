import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TLSCertificatesManagement = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/PerformanceAndHardening/TLSCertificatesManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="TLS Certificates Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSCertificatesManagement;
