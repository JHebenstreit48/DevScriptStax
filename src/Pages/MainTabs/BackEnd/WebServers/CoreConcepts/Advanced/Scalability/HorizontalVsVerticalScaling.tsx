import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HorizontalVsVerticalScaling = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Scalability/HorizontalVsVerticalScaling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Horizontal vs Vertical Scaling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HorizontalVsVerticalScaling;
