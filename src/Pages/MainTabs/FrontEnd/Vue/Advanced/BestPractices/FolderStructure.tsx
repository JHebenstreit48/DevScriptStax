import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FolderStructure = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/BestPractices/FolderStructure';

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
