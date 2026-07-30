import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StructureAndNaming = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/Authoring/StructureAndNaming';

  return (
    <>
      <PageLayout>
        <PageTitle title="Structure & Naming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructureAndNaming;
