import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroToLoadBalancing = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Scalability/IntroToLoadBalancing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro to Load Balancing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToLoadBalancing;
