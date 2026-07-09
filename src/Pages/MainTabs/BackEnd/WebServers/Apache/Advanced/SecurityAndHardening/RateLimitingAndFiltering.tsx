import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RateLimitingAndFiltering = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/SecurityAndHardening/RateLimitingAndFiltering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rate Limiting & Filtering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RateLimitingAndFiltering;
