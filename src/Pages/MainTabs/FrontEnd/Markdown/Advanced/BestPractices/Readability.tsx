import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Readability = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/BestPractices/Readability';

  return (
    <>
      <PageLayout>
        <PageTitle title="Readability" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Readability;
