import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
