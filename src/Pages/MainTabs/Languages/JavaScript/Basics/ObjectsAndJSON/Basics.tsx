import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Basics = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsAndJSON/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Objects - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;