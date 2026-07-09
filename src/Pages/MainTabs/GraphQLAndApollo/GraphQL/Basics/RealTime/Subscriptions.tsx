import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Subscriptions = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/RealTime/Subscriptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Subscriptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Subscriptions;
