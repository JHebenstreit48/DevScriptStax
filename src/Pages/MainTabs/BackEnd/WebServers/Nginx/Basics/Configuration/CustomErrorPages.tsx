import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomErrorPages = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Configuration/CustomErrorPages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Error Pages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomErrorPages;
