import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigFiles = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Setup/ConfigFiles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Config Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigFiles;
