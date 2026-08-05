import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OptimisticUI = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/Mutations/OptimisticUI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimistic UI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimisticUI;
