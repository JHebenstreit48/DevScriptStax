import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
