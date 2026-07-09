import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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