import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NodeModulesAndResolution = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/NodeModulesResolution';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="node_modules & Resolution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodeModulesAndResolution;
