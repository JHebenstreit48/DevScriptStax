import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
