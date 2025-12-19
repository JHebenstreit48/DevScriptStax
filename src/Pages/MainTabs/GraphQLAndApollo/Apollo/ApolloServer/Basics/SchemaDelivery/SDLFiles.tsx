import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SDLFiles = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaDelivery/SDLFiles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SDL Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SDLFiles;
