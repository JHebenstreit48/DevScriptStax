import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseCases = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/Fundamentals/UseCases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseCases;
