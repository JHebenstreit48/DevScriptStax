import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OptimisticUI = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/Mutations/OptimisticUI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Optimistic UI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimisticUI;
