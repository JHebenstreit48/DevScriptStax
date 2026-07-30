import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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