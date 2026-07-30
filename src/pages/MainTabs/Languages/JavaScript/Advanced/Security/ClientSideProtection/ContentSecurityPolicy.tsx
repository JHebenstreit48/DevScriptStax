import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ContentSecurityPolicy = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Security/ClientSideProtection/ContentSecurityPolicy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Content Security Policy (CSP)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContentSecurityPolicy;
