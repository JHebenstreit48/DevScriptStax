import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
