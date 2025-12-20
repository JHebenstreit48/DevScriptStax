import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RenderingMarkdown = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/SEOMetadata/RenderingMarkdown';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rendering Markdown" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RenderingMarkdown;
