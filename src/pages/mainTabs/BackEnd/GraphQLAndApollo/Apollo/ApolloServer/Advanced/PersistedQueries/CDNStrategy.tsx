import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CDNStrategy = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/PersistedQueries/CDNStrategy';

  return (
    <>
      <PageLayout>
        <PageTitle title="CDN Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CDNStrategy;
