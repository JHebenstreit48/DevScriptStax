import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SDLFiles = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaDelivery/SDLFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="SDL Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SDLFiles;
