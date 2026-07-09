import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IgnoreAndOverrides = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Workflow/IgnoreAndOverrides';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ignore & Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IgnoreAndOverrides;
