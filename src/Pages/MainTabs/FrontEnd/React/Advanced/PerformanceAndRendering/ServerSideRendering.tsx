import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerSideRendering = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/PerformanceAndRendering/ServerSideRendering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Server-Side Rendering (SSR)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerSideRendering;
