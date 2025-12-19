import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvAwarePipelines = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/PipelineDesign/EnvAwarePipelines';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Env-Aware Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvAwarePipelines;
