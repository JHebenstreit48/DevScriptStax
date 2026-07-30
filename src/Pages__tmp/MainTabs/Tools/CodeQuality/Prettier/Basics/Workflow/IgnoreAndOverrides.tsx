import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
