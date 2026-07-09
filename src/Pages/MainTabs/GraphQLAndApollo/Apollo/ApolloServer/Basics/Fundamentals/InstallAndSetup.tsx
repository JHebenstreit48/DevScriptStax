import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallAndSetup = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Apollo Server Fundamentals - Install & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndSetup;
