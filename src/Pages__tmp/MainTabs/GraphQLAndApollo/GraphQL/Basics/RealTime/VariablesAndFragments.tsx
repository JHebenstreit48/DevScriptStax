import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VariablesAndFragments = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/RealTime/VariablesAndFragments';

  return (
    <>
      <PageLayout>
        <PageTitle title="Variables & Fragments" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndFragments;
