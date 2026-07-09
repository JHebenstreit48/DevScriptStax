import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FolderStructure = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/BestPractices/FolderStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Folder Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FolderStructure;
