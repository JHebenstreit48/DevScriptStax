import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReactAndJSX = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Languages/ReactAndJSX';

  return (
    <>
      <PageLayout>
        <PageTitle title="React & JSX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactAndJSX;
