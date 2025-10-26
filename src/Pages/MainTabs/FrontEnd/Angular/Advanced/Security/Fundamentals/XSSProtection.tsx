import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const XSSProtection = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Security/Fundamentals/XSSProtection';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Security - XSS Protection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XSSProtection;