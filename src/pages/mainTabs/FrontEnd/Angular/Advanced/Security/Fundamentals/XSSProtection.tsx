import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const XSSProtection = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Security/Fundamentals/XSSProtection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Security - XSS Protection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XSSProtection;