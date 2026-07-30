import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HelmetAndRateLimit = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Security/HelmetAndRateLimit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Helmet & Rate Limit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HelmetAndRateLimit;
