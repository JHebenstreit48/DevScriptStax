import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CreatingAndUsingViews = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ViewsAndMaterializedViews/CreatingAndUsingViews';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Creating & Using Views" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreatingAndUsingViews;
