import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
