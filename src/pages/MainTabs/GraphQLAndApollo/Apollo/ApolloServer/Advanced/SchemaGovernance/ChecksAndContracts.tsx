import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ChecksAndContracts = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/SchemaGovernance/ChecksAndContracts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Checks & Contracts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChecksAndContracts;
