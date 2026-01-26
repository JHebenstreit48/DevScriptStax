import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroductionToJenkins = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Fundamentals/IntroductionToJenkins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Introduction to Jenkins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroductionToJenkins;
