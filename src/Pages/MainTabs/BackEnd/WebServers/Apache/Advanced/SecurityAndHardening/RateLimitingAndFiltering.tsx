import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RateLimitingAndFiltering = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/SecurityAndHardening/RateLimitingAndFiltering';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rate Limiting & Filtering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RateLimitingAndFiltering;
