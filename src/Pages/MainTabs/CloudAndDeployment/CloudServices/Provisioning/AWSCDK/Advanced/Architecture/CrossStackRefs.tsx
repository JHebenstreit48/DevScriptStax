import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CrossStackRefs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Architecture/CrossStackRefs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cross-Stack Refs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CrossStackRefs;
