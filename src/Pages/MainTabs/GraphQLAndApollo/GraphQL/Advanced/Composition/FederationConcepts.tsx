import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FederationConcepts = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Composition/FederationConcepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Federation Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FederationConcepts;
