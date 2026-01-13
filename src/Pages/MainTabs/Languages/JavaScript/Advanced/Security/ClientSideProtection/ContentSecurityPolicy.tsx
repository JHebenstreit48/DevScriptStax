import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContentSecurityPolicy = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Security/ClientSideProtection/ContentSecurityPolicy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Content Security Policy (CSP)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContentSecurityPolicy;
