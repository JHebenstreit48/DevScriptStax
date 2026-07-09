import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
