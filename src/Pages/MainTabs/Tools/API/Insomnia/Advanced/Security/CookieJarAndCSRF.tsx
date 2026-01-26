import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CookieJarAndCSRF = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Security/CookieJarAndCSRF';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cookie Jar & CSRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CookieJarAndCSRF;
