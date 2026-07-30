import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Mutations = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/Operations/Mutations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mutations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Mutations;
