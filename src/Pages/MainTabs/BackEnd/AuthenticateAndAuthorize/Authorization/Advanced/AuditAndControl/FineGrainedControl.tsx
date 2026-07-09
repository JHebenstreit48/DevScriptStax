import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
