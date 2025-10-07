import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RBAC = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Advanced/Security/AuthenticationAuthorization/RBAC.md';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RBAC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RBAC;