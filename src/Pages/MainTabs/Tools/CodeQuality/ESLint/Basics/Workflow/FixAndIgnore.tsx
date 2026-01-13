import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FixAndIgnore = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/Workflow/FixAndIgnore';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fix & Ignore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FixAndIgnore;
