import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallAndSetup = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Apollo Server Fundamentals - Install & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndSetup;
