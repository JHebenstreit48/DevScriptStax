import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
