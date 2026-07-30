import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UseCasesForFirebase = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Fundamentals/UseCasesForFirebase';

  return (
    <>
      <PageLayout>
        <PageTitle title="Use Cases for Firebase" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseCasesForFirebase;
