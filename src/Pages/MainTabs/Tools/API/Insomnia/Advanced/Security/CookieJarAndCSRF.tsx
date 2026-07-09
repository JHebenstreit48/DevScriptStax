import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
