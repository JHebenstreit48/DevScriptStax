import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FineGrainedControl = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/AuditAndControl/FineGrainedControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fine-Grained Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FineGrainedControl;
