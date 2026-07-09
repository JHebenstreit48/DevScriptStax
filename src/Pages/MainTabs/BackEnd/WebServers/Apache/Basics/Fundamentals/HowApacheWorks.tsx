import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
