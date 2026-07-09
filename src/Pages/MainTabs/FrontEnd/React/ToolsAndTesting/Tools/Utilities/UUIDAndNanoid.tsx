import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
