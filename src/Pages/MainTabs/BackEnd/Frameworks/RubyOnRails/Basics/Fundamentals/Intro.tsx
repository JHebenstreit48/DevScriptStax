import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Intro = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/Fundamentals/Intro';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Intro;
