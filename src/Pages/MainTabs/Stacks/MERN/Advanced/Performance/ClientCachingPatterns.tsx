import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClientCachingPatterns = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Performance/ClientCachingPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Client Caching Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClientCachingPatterns;
