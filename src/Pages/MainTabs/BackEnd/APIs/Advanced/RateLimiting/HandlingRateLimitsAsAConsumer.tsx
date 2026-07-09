import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HandlingRateLimitsAsAConsumer = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/RateLimiting/HandlingRateLimitsAsAConsumer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Handling Rate Limits as a Consumer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandlingRateLimitsAsAConsumer;
