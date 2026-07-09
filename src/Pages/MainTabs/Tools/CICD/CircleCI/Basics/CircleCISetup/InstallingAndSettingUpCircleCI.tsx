import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
