import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Store = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/CacheBasics/Store';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Store" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Store;
