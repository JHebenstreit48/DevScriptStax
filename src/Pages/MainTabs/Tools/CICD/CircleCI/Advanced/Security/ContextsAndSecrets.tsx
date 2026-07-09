import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContextsAndSecrets = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/Security/ContextsAndSecrets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Contexts & Secrets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContextsAndSecrets;
