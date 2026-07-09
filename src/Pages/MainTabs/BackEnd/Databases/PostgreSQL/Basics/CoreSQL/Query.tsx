import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Query = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/CoreSQL/Query';

  return (
    <>
      <PageLayout>
        <PageTitle title="Query" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Query;
