import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GraphQL = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/APIPatterns/GraphQL';

  return (
    <>
      <PageLayout>
        <PageTitle title="GraphQL (Koa)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GraphQL;
