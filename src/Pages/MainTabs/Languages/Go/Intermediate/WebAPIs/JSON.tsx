import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSON = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/WebAPIs/JSON';

  return (
    <>
      <PageLayout>
        <PageTitle title="JSON (encoding/json)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSON;
