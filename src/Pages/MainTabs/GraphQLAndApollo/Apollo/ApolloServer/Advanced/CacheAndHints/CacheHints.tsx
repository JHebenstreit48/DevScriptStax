import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CacheHints = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/CacheAndHints/CacheHints';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cache Hints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CacheHints;
