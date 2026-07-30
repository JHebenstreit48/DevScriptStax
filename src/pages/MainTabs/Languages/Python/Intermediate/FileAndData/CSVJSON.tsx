import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CSVJSON = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/FileAndData/CSVJSON';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSV/JSON" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSVJSON;
