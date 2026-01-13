import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JenkinsfileBasics = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/JenkinsfileBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Jenkinsfile Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JenkinsfileBasics;
