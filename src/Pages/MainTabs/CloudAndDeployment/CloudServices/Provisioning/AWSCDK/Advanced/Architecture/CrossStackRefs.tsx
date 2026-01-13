import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CrossStackRefs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Architecture/CrossStackRefs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cross-Stack Refs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CrossStackRefs;
