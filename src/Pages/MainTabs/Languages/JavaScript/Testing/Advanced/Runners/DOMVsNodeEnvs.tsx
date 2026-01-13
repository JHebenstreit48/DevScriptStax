import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DOMVsNodeEnvs = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Runners/DOMVsNodeEnvs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DOM vs Node Envs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DOMVsNodeEnvs;
