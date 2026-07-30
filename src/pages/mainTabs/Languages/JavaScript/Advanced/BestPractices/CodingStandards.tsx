import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CodingStandards = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/BestPractices/CodingStandards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coding Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodingStandards;
