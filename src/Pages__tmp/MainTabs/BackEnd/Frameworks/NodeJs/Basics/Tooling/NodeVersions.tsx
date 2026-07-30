import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
