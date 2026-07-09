import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PublicVSPrivate = () => {
  const markdownFilePath = 'BackEnd/API/Basics/TypesOfAPIs/PublicVSPrivate';

  return (
    <>
      <PageLayout>
        <PageTitle title="Public vs. Private APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PublicVSPrivate;