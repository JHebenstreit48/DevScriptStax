import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CSRFProtection = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Security/Fundamentals/CSRFProtection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Security - CSRF Protection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSRFProtection;