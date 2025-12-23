import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GettingStarted = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/Fundamentals/GettingStarted';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fundamentals: Getting Started" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GettingStarted;
