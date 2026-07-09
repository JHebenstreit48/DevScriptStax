import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EJS = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Basics/ViewsAndStatic/EJS';

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
