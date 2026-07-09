import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
