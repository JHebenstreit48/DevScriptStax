import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Components = () => {
  const markdownFilePath = 'FrontEnd/Angular/Testing/Unit/Components';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Unit Testing - Component" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Components;