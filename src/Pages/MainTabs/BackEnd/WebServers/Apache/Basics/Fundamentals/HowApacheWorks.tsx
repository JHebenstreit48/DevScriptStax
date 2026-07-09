import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HowApacheWorks = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Basics/Fundamentals/HowApacheWorks';

  return (
    <>
      <PageLayout>
        <PageTitle title="How Apache Works" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HowApacheWorks;
