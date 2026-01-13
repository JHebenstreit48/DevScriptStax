import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuditingAndCompliance = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/AuditingAndCompliance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Auditing & Compliance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuditingAndCompliance;
