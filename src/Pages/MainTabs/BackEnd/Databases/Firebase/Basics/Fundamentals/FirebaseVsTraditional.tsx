import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FirebaseVsTraditional = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Fundamentals/FirebaseVsTraditional';

  return (
    <>
      <PageLayout>
        <PageTitle title="Firebase vs Traditional" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirebaseVsTraditional;
