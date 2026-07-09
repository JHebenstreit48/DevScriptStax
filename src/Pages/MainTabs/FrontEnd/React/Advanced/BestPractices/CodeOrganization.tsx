import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodeOrganization = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/BestPractices/CodeOrganization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Code Organization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeOrganization;
