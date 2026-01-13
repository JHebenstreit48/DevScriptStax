import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PartialWildcardColumnstore = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/IndexingAndQueryPlanner/PartialWildcardColumnstore';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Partial/Wildcard/Columnstore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PartialWildcardColumnstore;
