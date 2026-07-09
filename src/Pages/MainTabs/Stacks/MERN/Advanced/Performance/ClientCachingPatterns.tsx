import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
