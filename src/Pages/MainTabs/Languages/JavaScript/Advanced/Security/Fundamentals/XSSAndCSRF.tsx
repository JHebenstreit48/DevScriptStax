import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
