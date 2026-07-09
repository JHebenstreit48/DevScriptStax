import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Loops = () => {
  const markdownFilePath = 'Languages/Dart/Basics/ControlFlow/Loops';

  return (
    <>
      <PageLayout>
        <PageTitle title="Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Loops;
