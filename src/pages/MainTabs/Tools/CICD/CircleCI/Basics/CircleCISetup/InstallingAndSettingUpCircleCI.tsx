import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallingAndSettingUpCircleCI = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/CircleCISetup/InstallingAndSettingUpCircleCI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Installing & Setting Up CircleCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingAndSettingUpCircleCI;
