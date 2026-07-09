import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NodeAPIs = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/PluginsAndExtensibility/NodeAPIs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Node APIs (gatsby-node.js)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodeAPIs;
