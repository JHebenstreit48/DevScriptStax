import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APQSetup = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/PersistedQueries/APQSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="APQ Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APQSetup;
