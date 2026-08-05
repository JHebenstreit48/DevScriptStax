import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
