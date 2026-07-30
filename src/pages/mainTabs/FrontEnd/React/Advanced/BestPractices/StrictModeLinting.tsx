import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StrictModeLinting = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/BestPractices/StrictModeLinting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Strict Mode/Linting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StrictModeLinting;
