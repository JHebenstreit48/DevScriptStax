import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VSCodeAndEditors = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/EditorsAndCLI/VSCodeAndEditors';

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
