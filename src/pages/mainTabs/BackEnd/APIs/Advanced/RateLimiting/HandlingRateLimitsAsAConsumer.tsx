import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
