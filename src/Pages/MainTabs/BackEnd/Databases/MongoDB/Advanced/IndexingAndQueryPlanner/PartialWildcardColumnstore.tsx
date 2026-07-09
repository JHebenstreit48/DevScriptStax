import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PartialWildcardColumnstore = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/IndexingAndQueryPlanner/PartialWildcardColumnstore';

  return (
    <>
      <PageLayout>
        <PageTitle title="Partial/Wildcard/Columnstore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PartialWildcardColumnstore;
