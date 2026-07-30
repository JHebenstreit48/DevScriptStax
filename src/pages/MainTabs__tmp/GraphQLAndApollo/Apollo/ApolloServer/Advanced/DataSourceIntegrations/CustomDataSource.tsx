import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomDataSource = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/DataSourceIntegrations/CustomDataSource';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom DataSource" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomDataSource;
