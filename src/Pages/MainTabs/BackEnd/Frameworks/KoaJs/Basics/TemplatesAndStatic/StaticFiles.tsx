import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticFiles = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/TemplatesAndStatic/StaticFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticFiles;
