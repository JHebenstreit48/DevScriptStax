import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TslintJson = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Setup/TslintJson';

  return (
    <>
      <PageLayout>
        <PageTitle title="tslint.json" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TslintJson;
