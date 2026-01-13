import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CIIntegration = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/CIAndSecurity/CIIntegration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CI Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CIIntegration;
