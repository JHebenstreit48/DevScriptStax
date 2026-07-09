import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RenderingMarkdown = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/SEOMetadata/RenderingMarkdown';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rendering Markdown" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RenderingMarkdown;
