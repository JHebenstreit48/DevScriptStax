import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Frameworks - Bootstrap Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;