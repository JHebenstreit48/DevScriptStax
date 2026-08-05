import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
