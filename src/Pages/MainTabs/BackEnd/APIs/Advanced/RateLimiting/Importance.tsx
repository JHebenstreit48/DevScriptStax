import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Importance = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/RateLimiting/Importance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Importance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Importance;
