import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KeyConcepts = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/Fundamentals/KeyConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Key Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeyConcepts;
