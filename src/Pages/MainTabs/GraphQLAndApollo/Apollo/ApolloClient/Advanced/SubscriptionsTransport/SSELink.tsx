import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SSELink = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/SubscriptionsTransport/SSELink';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSE Link" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSELink;
