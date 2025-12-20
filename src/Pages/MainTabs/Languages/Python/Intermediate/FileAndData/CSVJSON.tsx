import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSVJSON = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/FileAndData/CSVJSON';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSV/JSON" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSVJSON;
