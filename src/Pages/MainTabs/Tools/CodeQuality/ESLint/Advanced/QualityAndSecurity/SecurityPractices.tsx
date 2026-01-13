import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityPractices = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/QualityAndSecurity/SecurityPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Security Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityPractices;
