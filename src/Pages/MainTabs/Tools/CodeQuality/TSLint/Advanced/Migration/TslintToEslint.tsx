import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TslintToEslint = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Migration/TslintToEslint';

  return (
    <>
      <PageLayout>
        <PageTitle title="tslint-to-eslint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TslintToEslint;
