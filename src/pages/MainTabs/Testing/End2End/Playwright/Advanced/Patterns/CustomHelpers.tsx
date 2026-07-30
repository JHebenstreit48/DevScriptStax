import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomHelpers = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/Patterns/CustomHelpers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Helpers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomHelpers;
