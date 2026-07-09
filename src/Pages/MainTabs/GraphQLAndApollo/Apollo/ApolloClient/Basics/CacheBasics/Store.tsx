import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Store = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/CacheBasics/Store';

  return (
    <>
      <PageLayout>
        <PageTitle title="Store" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Store;
