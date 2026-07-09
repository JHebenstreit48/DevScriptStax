import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
