import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
