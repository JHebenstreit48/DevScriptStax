import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FetchPolicies = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/CacheAndPolicies/FetchPolicies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fetch Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FetchPolicies;
