import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Concepts = () => {
  const markdownFilePath = 'Languages/Dart/Basics/NullSafety/Concepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Concepts;
