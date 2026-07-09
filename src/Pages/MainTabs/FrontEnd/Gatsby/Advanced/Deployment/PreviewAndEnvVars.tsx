import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PreviewAndEnvVars = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Deployment/PreviewAndEnvVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Preview & Env Vars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PreviewAndEnvVars;
