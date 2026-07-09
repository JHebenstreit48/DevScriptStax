import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CodeOrganization = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Advanced/BestPractices/CodeOrganization';

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
