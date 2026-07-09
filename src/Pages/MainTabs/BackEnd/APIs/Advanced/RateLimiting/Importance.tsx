import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Importance = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/RateLimiting/Importance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Importance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Importance;
