import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PreviewAndEnvVars = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Deployment/PreviewAndEnvVars';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Preview & Env Vars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PreviewAndEnvVars;
