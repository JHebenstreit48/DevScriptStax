import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuditingAndCompliance = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/AuditingAndCompliance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Auditing & Compliance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuditingAndCompliance;
