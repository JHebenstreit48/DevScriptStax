import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseMutation = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/Mutations/UseMutation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="useMutation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseMutation;
