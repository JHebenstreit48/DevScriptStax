import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PublicVSPrivate = () => {
  const markdownFilePath = 'BackEnd/API/Basics/TypesOfAPIs/PublicVSPrivate';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Public vs. Private APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PublicVSPrivate;