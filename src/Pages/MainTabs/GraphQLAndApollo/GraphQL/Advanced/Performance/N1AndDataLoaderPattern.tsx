import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const N1AndDataLoaderPattern = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Performance/N1AndDataLoaderPattern';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="N+1 and DataLoader Pattern" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default N1AndDataLoaderPattern;
