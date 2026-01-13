import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuthorPlugins = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Plugins/AuthorPlugins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Author Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuthorPlugins;
