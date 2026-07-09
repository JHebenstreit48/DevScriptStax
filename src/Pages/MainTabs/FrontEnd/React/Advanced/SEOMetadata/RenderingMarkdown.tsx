import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
