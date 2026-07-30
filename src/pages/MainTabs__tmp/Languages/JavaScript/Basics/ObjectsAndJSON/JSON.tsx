import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JSON = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsAndJSON/JSON';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Objects & JSON - Working with JSON" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSON;