import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CodeStandards = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/BestPractices/CodeStandards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Code Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeStandards;
