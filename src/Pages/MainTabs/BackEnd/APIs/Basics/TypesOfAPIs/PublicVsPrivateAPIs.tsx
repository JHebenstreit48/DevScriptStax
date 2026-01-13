import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PublicVsPrivateAPIs = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/TypesOfAPIs/PublicVsPrivateAPIs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Public vs Private APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PublicVsPrivateAPIs;
