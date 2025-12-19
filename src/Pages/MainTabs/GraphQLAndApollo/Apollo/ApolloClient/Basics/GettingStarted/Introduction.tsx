import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/GettingStarted/Introduction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GettingStarted: Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
