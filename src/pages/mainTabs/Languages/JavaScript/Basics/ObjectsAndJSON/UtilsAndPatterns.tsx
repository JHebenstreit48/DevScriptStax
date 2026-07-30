import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UtilsAndPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsAndJSON/UtilsAndPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript - Utilities and Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UtilsAndPatterns;