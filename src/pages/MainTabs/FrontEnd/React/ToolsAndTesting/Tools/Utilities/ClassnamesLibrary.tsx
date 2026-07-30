import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClassnamesLibrary = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/Utilities/ClassnamesLibrary';

  return (
    <>
      <PageLayout>
        <PageTitle title="Classnames Library" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassnamesLibrary;
