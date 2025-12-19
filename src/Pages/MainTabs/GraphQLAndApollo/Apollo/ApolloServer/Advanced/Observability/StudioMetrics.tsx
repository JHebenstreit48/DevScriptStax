import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StudioMetrics = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/Observability/StudioMetrics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Studio Metrics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StudioMetrics;
