import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RunningTestsInJenkins = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/RunningTestsInJenkins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Running Tests in Jenkins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RunningTestsInJenkins;
