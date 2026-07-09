import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DOMVsNodeEnvs = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Runners/DOMVsNodeEnvs';

  return (
    <>
      <PageLayout>
        <PageTitle title="DOM vs Node Envs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DOMVsNodeEnvs;
