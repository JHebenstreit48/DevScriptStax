import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
