import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ParametersAndContext = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSCDK/Advanced/MultiEnv/ParametersAndContext';

  return (
    <>
      <PageLayout>
        <PageTitle title="Parameters & Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParametersAndContext;
