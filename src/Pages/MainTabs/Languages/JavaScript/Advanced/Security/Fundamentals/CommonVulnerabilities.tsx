import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonVulnerabilities = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Security/Fundamentals/CommonVulnerabilities';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Vulnerabilities" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonVulnerabilities;
