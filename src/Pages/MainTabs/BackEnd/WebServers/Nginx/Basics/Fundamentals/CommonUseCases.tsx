import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonUseCases = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Fundamentals/CommonUseCases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonUseCases;
