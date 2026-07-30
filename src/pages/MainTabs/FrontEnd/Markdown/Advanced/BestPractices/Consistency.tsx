import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Consistency = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/BestPractices/Consistency';

  return (
    <>
      <PageLayout>
        <PageTitle title="Consistency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Consistency;
