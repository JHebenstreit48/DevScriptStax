import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModelingStrategies = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/DataModelingAndPerformance/ModelingStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Modeling Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelingStrategies;
