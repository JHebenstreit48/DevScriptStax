import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';


const UtilsAndPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsAndJSON/UtilsAndPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript - Utilities and Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UtilsAndPatterns;