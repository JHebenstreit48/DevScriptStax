import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RetryLink = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/ErrorsAndRetry/RetryLink';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Retry Link" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RetryLink;
