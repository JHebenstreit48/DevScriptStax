import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UUIDAndNanoid = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/Utilities/UUIDAndNanoid';

  return (
    <>
      <PageLayout>
        <PageTitle title="UUID & nanoid" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UUIDAndNanoid;
