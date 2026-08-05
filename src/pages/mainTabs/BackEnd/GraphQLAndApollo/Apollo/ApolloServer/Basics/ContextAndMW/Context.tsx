import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Context = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/ContextAndMW/Context';

  return (
    <>
      <PageLayout>
        <PageTitle title="Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Context;
