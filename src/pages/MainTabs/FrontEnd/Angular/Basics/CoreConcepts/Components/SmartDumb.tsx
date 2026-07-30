import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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