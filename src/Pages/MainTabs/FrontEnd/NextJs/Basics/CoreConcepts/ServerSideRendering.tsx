import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
