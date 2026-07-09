import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
