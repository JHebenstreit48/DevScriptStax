import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SeverityAndOptions = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Rules/SeverityAndOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Severity & Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeverityAndOptions;
