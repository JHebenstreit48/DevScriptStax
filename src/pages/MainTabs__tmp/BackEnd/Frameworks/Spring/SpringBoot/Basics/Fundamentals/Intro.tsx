import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
