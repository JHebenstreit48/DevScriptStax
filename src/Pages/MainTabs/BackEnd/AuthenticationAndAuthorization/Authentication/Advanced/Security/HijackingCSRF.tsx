import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HijackingCSRF = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/HijackingCSRF';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Hijacking / CSRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HijackingCSRF;
