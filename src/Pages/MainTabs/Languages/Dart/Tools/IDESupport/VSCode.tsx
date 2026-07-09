import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VSCode = () => {
  const markdownFilePath = 'Languages/Dart/Tools/IDESupport/VSCode';

  return (
    <>
      <PageLayout>
        <PageTitle title="VS Code" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VSCode;
