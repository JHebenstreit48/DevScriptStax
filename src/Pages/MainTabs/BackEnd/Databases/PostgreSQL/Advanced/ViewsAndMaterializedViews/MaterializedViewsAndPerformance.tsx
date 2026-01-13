import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MaterializedViewsAndPerformance = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/MaterializedViewsAndPerformance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Materialized Views & Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MaterializedViewsAndPerformance;
