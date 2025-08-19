import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = '/GraphQLAndApolloNotes/Apollo/ApolloServer/Basics/Introduction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Apollo Server Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
