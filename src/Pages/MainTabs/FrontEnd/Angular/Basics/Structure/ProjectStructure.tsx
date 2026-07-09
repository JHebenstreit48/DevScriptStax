import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Structure = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Structure/ProjectStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Basics - Project Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;