import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Structure = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/Structure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Basics - Project Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;