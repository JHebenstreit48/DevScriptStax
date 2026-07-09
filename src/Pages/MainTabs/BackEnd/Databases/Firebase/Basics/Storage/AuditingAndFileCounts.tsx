import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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