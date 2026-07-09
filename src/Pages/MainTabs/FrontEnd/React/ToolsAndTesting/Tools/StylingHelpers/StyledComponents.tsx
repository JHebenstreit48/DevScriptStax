import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StyledComponents = () => {
  const markdownFilePath = 'FrontEnd/React/ToolsAndTesting/Tools/StylingHelpers/StyledComponents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Styled Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StyledComponents;
