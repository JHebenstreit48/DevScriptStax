import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Authentication = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Security/AuthenticationAuthorization/Authentication';

  return (
    <>
      <PageLayout>
        <PageTitle title="Authentication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Authentication;