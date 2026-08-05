import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Normalization = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/CacheBasics/Normalization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Normalization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Normalization;
