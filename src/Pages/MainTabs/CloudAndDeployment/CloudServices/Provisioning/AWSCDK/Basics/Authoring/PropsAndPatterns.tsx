import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PropsAndPatterns = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Authoring/PropsAndPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Props & Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropsAndPatterns;
