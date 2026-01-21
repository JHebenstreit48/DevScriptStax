import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Mutations = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/Operations/Mutations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mutations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Mutations;
