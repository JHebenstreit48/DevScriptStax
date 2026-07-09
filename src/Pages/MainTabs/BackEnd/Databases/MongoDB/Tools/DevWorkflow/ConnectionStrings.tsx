import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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