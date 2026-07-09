import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroductionToJenkins = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Fundamentals/IntroductionToJenkins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Introduction to Jenkins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroductionToJenkins;
