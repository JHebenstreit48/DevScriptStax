import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CookiesAndCSRF = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Security/CookiesAndCSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cookies & CSRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CookiesAndCSRF;
