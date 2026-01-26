import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfiguringACircleciConfigYml = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/CircleCISetup/ConfiguringACircleciConfigYml';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Configuring a .circleci/config.yml" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfiguringACircleciConfigYml;
