import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FolderStructure = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/BestPractices/FolderStructure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Folder Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FolderStructure;
