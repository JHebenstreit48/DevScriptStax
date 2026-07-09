import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Monorepos = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/CIAndAutomation/Monorepos';

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
