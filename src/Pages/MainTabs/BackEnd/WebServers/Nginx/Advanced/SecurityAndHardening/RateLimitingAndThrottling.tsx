import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
