import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnderstandingViews = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/UnderstandingViews';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Understanding Views" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingViews;
