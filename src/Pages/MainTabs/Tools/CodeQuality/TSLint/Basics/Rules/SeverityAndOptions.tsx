import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SeverityAndOptions = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Rules/SeverityAndOptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Severity & Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeverityAndOptions;
