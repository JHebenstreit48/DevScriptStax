import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BestPractices = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/Patterns/BestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BestPractices;
