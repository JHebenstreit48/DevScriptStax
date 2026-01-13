import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Subscriptions = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/Subscriptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Subscriptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Subscriptions;
