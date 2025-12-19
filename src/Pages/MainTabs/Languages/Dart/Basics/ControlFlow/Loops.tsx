import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Loops = () => {
  const markdownFilePath = 'Languages/Dart/Basics/ControlFlow/Loops';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Loops;
