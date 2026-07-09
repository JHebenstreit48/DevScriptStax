import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CORSAndSameSiteCookies = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Security/ClientSideProtection/CORSAndSameSiteCookies';

  return (
    <>
      <PageLayout>
        <PageTitle title="CORS and SameSite Cookies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CORSAndSameSiteCookies;
