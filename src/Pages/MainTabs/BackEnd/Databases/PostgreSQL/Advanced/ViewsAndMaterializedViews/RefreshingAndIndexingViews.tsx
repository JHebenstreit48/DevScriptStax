import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RefreshingAndIndexingViews = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/RefreshingAndIndexingViews';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Refreshing & Indexing Views" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RefreshingAndIndexingViews;
