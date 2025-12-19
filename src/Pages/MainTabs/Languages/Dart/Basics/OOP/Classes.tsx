import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Classes = () => {
  const markdownFilePath = 'Languages/Dart/Basics/OOP/Classes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Classes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Classes;
