import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
