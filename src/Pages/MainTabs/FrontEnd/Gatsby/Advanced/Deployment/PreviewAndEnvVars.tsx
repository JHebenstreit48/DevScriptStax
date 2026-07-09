import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
