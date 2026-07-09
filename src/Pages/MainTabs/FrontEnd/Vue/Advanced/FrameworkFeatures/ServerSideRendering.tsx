import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerSideRendering = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/FrameworkFeatures/ServerSideRendering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Server-Side Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerSideRendering;
