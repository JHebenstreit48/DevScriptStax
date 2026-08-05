import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Rules/CoreRules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreRules;
