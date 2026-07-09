import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditorIntegration = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Workflow/EditorIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Editor Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditorIntegration;
