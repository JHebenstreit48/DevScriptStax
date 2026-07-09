import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SSOFederation = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/SystemsAndDesign/SSOFederation';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSO / Federation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSOFederation;
