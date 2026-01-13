import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityBestPractices = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/PerformanceAndSecurity/SecurityBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Security Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityBestPractices;
