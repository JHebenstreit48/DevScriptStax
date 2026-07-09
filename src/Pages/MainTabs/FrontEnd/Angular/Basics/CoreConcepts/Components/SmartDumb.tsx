import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SmartDumb = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/Components/SmartDumb';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Components - Smart vs Dumb" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SmartDumb;