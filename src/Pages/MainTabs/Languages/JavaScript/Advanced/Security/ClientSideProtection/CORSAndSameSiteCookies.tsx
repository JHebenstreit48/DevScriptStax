import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
