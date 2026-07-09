import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JenkinsfileBasics = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/JenkinsfileBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Jenkinsfile Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JenkinsfileBasics;
