import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RESTDataSource = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/DataSourceIntegrations/RESTDataSource';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RESTDataSource" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTDataSource;
