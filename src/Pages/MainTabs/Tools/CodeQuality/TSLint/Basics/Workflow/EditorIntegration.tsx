import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditorIntegration = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Workflow/EditorIntegration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Editor Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditorIntegration;
