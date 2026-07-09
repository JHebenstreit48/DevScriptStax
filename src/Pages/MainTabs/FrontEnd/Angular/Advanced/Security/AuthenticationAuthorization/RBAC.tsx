import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RBAC = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Security/AuthenticationAuthorization/RBAC';

  return (
    <>
      <PageLayout>
        <PageTitle title="RBAC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RBAC;