import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
