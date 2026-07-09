import PageLayout from '@/Components/NavigationUI/PageLayout';
import Notes from '@/Components/PageComponents/Notes/Notes';
import PageTitle from '@/Components/PageComponents/PageTitle';

const ConfigFiles = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Structure/ConfigFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Basics - Configuration Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigFiles;