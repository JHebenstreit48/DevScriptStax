import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplRenderOptim = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/ChangeDetection/TemplateRenderingOptim';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular - Template Rendering Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplRenderOptim;