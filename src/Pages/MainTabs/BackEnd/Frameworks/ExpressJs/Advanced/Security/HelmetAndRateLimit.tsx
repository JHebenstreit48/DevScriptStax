import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HelmetAndRateLimit = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Security/HelmetAndRateLimit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Helmet & Rate Limit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HelmetAndRateLimit;
