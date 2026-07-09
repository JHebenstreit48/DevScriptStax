import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
