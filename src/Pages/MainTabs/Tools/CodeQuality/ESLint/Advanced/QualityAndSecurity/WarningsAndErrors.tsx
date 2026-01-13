import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WarningsAndErrors = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/QualityAndSecurity/WarningsAndErrors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Warnings & Errors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WarningsAndErrors;
