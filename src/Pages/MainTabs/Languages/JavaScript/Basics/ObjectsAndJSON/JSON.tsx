import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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