import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OAuthFlows = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Security/OAuthFlows';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OAuth Flows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OAuthFlows;
