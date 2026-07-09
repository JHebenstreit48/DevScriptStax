import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
