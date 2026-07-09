import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FixOnSave = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Workflow/FixOnSave';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fix on Save" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FixOnSave;
