import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HijackingCSRF = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/HijackingCSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hijacking / CSRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HijackingCSRF;
