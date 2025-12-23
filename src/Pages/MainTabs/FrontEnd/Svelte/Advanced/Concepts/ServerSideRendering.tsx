import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerSideRendering = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Advanced/Concepts/ServerSideRendering';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Server-Side Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerSideRendering;
