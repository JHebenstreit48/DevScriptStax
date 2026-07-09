import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecurityBestPractices = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/PerformanceAndSecurity/SecurityBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityBestPractices;
