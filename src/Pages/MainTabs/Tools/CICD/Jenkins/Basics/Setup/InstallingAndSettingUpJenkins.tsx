import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
