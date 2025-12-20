import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UUIDAndNanoid = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/Utilities/UUIDAndNanoid';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="UUID & nanoid" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UUIDAndNanoid;
