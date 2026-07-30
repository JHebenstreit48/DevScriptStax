import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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