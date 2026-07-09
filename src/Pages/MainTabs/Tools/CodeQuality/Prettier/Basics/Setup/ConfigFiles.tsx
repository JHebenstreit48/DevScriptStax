import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigFiles = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Setup/ConfigFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Config Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigFiles;
