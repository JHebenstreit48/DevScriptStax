import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
