import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonTableExpressions = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/CommonTableExpressions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Table Expressions (CTEs)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonTableExpressions;
