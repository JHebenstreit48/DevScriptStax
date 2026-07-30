import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StaticFiles = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/ViewsAndStatic/StaticFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Frameworks - ExpressJS - Views & Static - Static Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticFiles;