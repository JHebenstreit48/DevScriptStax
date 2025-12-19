import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Normalization = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/CacheBasics/Normalization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Normalization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Normalization;
