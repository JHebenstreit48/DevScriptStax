import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModelingStrategies = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/DataModelingAndPerformance/ModelingStrategies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Modeling Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelingStrategies;
