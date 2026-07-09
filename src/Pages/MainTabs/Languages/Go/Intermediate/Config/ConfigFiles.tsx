import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigFiles = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/Config/ConfigFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Config Files (viper)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigFiles;
