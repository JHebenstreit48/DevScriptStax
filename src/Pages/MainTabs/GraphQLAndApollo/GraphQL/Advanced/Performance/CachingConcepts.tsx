import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingConcepts = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Performance/CachingConcepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingConcepts;
