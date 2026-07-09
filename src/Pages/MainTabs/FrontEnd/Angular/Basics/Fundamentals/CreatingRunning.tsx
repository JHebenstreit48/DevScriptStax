import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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