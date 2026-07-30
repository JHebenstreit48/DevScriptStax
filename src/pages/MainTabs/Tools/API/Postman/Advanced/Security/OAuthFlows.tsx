import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OAuthFlows = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Security/OAuthFlows';

  return (
    <>
      <PageLayout>
        <PageTitle title="OAuth Flows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OAuthFlows;
