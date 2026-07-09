import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HorizontalVsVerticalScaling = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Scalability/HorizontalVsVerticalScaling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Horizontal vs Vertical Scaling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HorizontalVsVerticalScaling;
