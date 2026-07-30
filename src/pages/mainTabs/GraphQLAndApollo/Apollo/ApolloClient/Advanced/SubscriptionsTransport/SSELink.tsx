import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
