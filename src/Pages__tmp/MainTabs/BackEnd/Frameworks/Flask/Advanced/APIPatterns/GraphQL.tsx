import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GraphQL = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/APIPatterns/GraphQL';

  return (
    <>
      <PageLayout>
        <PageTitle title="GraphQL (Flask)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GraphQL;
