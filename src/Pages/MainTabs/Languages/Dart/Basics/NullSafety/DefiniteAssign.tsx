import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DefiniteAssign = () => {
  const markdownFilePath = 'Languages/Dart/Basics/NullSafety/DefiniteAssign';

  return (
    <>
      <PageLayout>
        <PageTitle title="Definite Assign" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DefiniteAssign;
