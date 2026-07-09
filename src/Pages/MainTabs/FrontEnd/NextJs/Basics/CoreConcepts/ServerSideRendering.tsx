import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerSideRendering = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/CoreConcepts/ServerSideRendering';

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
