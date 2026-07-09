import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RetryLink = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/ErrorsAndRetry/RetryLink';

  return (
    <>
      <PageLayout>
        <PageTitle title="Retry Link" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RetryLink;
