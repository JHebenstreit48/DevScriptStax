import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomErrorPages = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Configuration/CustomErrorPages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Error Pages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomErrorPages;
