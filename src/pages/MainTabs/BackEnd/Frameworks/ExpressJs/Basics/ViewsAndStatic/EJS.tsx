import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EJS = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/ViewsAndStatic/EJS';

  return (
    <>
      <PageLayout>
        <PageTitle title="EJS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EJS;