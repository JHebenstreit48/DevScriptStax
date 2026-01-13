import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Monorepos = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/CIAndAutomation/Monorepos';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Monorepos" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Monorepos;
