import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EdgeDictionaries = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/FastlyCompute/Basics/Routing/EdgeDictionaries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Edge Dictionaries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EdgeDictionaries;
