import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IntroToLoadBalancing = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Scalability/IntroToLoadBalancing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Intro to Load Balancing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToLoadBalancing;
