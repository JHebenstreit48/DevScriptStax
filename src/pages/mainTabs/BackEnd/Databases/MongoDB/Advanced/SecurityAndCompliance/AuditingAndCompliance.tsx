import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
