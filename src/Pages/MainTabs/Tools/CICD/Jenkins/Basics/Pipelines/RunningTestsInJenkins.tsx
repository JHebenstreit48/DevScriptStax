import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RunningTestsInJenkins = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/RunningTestsInJenkins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Running Tests in Jenkins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RunningTestsInJenkins;
