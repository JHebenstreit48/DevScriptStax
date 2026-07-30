import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Monorepos = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/Workflow/Monorepos';

  return (
    <>
      <PageLayout>
        <PageTitle title="Monorepos" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Monorepos;
