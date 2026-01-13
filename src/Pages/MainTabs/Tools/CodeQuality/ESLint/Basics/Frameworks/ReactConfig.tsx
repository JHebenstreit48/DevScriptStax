import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactConfig = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/Frameworks/ReactConfig';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactConfig;
