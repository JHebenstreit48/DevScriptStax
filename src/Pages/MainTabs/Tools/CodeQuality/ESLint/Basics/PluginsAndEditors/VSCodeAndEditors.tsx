import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VSCodeAndEditors = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/PluginsAndEditors/VSCodeAndEditors';

  return (
    <>
      <PageLayout>
        <PageTitle title="VS Code & Editors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VSCodeAndEditors;
