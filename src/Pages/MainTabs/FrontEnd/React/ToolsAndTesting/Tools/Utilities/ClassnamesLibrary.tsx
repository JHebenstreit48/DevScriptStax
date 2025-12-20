import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClassnamesLibrary = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/Utilities/ClassnamesLibrary';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Classnames Library" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassnamesLibrary;
