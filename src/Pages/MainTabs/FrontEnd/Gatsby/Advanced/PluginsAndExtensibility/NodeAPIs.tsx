import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NodeAPIs = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/PluginsAndExtensibility/NodeAPIs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Node APIs (gatsby-node.js)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodeAPIs;
