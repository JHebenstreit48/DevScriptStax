import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FixAndIgnore = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/Workflow/FixAndIgnore';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fix & Ignore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FixAndIgnore;
