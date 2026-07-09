import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HttpLinkAndSplit = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/LinkStack/HttpLinkAndSplit';

  return (
    <>
      <PageLayout>
        <PageTitle title="HttpLink & Split" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HttpLinkAndSplit;
