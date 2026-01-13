import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParametersAndContext = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/MultiEnv/ParametersAndContext';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Parameters & Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParametersAndContext;
