import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VariablesAndFragments = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/RealTime/VariablesAndFragments';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Variables & Fragments" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndFragments;
