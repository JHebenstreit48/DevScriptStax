import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FixAndCI = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/Workflow/FixAndCI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fix & CI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FixAndCI;
