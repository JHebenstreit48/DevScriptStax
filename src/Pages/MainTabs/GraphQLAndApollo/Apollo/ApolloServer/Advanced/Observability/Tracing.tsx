import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Tracing = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/Observability/Tracing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tracing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tracing;
