import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AOF = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/Persistence/AOF';

  return (
    <>
      <PageLayout>
        <PageTitle title="AOF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AOF;
