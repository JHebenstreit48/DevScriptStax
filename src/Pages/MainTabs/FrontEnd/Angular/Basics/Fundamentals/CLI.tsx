import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLI = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Fundamentals/CLI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Fundamentals - CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLI;