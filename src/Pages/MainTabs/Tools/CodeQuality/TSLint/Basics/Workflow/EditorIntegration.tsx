import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
