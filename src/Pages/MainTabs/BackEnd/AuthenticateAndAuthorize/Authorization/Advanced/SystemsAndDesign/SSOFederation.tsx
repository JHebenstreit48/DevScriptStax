import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SSOFederation = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/SystemsAndDesign/SSOFederation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SSO / Federation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSOFederation;
