import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
