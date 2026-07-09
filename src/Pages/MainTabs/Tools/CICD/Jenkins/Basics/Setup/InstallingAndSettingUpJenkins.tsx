import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallingAndSettingUpJenkins = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Setup/InstallingAndSettingUpJenkins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Installing & Setting Up Jenkins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingAndSettingUpJenkins;
