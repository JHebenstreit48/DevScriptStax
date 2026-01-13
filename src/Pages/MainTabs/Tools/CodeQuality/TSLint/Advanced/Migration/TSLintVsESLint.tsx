import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TSLintVsESLint = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Migration/TSLintVsESLint';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TSLint vs ESLint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TSLintVsESLint;
