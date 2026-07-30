import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConnectionStrings = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/DevWorkflow/ConnectionStrings';

  return (
    <>
      <PageLayout>
        <PageTitle title="MongoDB Tools - Connection Strings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConnectionStrings;