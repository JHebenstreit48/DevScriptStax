import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomHelpers = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/Patterns/CustomHelpers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Helpers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomHelpers;
