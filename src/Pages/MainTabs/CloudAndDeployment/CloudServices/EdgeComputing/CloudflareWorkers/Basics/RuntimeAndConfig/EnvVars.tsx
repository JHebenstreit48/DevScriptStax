import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EnvVars = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/CloudflareWorkers/Basics/RuntimeAndConfig/EnvVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Env Vars (Workers)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvVars;
