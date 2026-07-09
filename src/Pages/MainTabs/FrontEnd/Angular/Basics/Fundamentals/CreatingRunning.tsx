import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CreateRun = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Fundamentals/CreatingAndRunning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular - Creating and Running an App" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreateRun;