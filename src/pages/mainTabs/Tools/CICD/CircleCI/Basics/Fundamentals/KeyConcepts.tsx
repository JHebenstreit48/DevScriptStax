import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KeyConcepts = () => {
  const markdownFilePath = 'Tools/CICD/CircleCI/Basics/Fundamentals/Concepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Key Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeyConcepts;
