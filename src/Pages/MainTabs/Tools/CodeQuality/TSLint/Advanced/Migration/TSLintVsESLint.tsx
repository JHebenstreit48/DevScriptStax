import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TSLintVsESLint = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Migration/TSLintVsESLint';

  return (
    <>
      <PageLayout>
        <PageTitle title="TSLint vs ESLint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TSLintVsESLint;
