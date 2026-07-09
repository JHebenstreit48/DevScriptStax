import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
