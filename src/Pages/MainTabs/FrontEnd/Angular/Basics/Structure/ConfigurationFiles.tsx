import PageLayout from '@/components/navigationUI/pageLayout';
import Notes from '@/components/pageComponents/notes/notes';
import PageTitle from '@/components/pageComponents/pageTitle';

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