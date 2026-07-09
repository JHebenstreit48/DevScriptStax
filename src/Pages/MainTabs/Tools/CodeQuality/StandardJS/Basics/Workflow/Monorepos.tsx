import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
