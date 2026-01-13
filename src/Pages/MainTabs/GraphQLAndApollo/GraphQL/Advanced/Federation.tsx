import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Federation = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Federation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Federation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Federation;
