import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonVulnerabilities = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Security/Fundamentals/CommonVulnerabilities';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Vulnerabilities" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonVulnerabilities;
