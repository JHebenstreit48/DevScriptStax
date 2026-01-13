import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactAndJSX = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Languages/ReactAndJSX';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React & JSX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactAndJSX;
