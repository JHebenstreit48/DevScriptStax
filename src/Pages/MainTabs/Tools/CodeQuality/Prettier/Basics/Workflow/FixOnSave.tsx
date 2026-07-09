import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
