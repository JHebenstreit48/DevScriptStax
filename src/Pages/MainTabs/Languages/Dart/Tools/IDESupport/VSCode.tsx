import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VSCode = () => {
  const markdownFilePath = 'Languages/Dart/Tools/IDESupport/VSCode';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="VS Code" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VSCode;
