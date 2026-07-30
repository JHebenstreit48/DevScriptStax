import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Firestore/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Firebase - Firestore - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;