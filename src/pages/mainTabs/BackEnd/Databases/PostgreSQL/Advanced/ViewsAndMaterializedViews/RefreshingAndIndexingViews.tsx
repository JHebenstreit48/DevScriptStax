import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RefreshingAndIndexingViews = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/RefreshingAndIndexingViews';

  return (
    <>
      <PageLayout>
        <PageTitle title="Refreshing & Indexing Views" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RefreshingAndIndexingViews;
