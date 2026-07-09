import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CookieJarAndCSRF = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Security/CookieJarAndCSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cookie Jar & CSRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CookieJarAndCSRF;
