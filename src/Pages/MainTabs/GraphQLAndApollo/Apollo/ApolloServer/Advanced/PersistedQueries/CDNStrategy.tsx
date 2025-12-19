import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CDNStrategy = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/PersistedQueries/CDNStrategy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CDN Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CDNStrategy;
