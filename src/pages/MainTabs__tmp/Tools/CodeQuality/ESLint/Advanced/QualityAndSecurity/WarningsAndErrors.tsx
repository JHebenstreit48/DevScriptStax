import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WarningsAndErrors = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/QualityAndSecurity/WarningsAndErrors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Warnings & Errors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WarningsAndErrors;
