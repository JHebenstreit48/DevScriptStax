import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPServers = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Web/HTTPServers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTTP Servers (Axum)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPServers;
