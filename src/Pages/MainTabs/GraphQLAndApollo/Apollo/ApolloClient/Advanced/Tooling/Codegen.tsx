import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Codegen = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/Tooling/Codegen';

  return (
    <>
      <PageLayout>
        <PageTitle title="Codegen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Codegen;
