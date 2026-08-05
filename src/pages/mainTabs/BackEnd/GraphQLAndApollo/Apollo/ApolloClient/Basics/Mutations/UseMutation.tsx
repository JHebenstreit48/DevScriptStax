import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UseMutation = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/Mutations/UseMutation';

  return (
    <>
      <PageLayout>
        <PageTitle title="useMutation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseMutation;
