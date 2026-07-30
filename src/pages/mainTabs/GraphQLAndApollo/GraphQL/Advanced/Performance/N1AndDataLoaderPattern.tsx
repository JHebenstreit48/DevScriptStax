import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const N1AndDataLoaderPattern = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Performance/N1AndDataLoaderPattern';

  return (
    <>
      <PageLayout>
        <PageTitle title="N+1 and DataLoader Pattern" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default N1AndDataLoaderPattern;
