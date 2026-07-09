import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NodeVersions = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Tooling/Versions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Node Versions (nvm)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodeVersions;
