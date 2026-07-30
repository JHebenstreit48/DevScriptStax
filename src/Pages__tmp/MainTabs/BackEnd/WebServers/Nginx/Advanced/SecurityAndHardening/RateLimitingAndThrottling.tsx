import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RateLimitingAndThrottling = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/SecurityAndHardening/RateLimitingAndThrottling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rate Limiting & Throttling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RateLimitingAndThrottling;
