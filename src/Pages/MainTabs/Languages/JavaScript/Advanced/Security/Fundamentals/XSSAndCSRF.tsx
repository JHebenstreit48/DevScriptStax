import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const XSSAndCSRF = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Security/Fundamentals/XSSAndCSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="XSS and CSRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XSSAndCSRF;
