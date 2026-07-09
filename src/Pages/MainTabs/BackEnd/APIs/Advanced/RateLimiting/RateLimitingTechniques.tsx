import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RateLimitingTechniques = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/RateLimiting/RateLimitingTechniques';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rate Limiting Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RateLimitingTechniques;
