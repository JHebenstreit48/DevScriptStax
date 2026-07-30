import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConfiguringACircleciConfigYml = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/CircleCISetup/ConfiguringACircleciConfigYml';

  return (
    <>
      <PageLayout>
        <PageTitle title="Configuring a .circleci/config.yml" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfiguringACircleciConfigYml;
