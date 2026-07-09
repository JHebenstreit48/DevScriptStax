import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
