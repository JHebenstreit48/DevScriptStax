import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Intro = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Fundamentals/Intro';

  return (
    <>
      <PageLayout>
        <PageTitle title="Intro" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Intro;
