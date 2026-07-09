import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GraphQL = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/APIPatterns/GraphQL';

  return (
    <>
      <PageLayout>
        <PageTitle title="GraphQL (Express)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GraphQL;
