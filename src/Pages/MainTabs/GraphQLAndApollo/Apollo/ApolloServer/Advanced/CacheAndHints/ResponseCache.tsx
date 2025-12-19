import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResponseCache = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/CacheAndHints/ResponseCache';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Response Cache" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResponseCache;
