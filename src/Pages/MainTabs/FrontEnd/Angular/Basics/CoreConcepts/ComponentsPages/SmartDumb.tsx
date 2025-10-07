import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const SmartDumb = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Basics/CoreConcepts/AngComponents/SmartDumb';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Components - Smart vs Dumb" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SmartDumb;