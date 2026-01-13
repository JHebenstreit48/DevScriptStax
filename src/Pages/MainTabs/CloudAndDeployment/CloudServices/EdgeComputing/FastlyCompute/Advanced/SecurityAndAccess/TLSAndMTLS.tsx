import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TLSAndMTLS = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/SecurityAndAccess/TLSAndMTLS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TLS & mTLS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSAndMTLS;
