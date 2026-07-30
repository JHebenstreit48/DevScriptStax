import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPServers = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Web/HTTPServers';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP Servers (Axum)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPServers;
