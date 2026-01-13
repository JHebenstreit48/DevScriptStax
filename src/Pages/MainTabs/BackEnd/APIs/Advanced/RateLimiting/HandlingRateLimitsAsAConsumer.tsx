import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HandlingRateLimitsAsAConsumer = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/RateLimiting/HandlingRateLimitsAsAConsumer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Handling Rate Limits as a Consumer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandlingRateLimitsAsAConsumer;
