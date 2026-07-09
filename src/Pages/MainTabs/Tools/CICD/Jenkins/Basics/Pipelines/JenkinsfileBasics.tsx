import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
