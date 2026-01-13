import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticDynamicRules = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Basics/PoliciesAndAccess/StaticDynamicRules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Static / Dynamic Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticDynamicRules;
