import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvsAndContext = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Authoring/EnvsAndContext';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Envs & Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvsAndContext;
