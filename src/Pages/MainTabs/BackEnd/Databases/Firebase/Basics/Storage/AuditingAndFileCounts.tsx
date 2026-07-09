import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuditingAndFileCounts = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Storage/AuditingAndFileCounts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Firebase Storage - Auditing & File Counts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuditingAndFileCounts;