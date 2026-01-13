import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RateLimitingTechniques = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/RateLimiting/RateLimitingTechniques';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rate Limiting Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RateLimitingTechniques;
