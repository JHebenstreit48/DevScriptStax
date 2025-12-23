import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileRoutingAndPages = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/CoreConcepts/FileRoutingAndPages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="File Routing & Pages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileRoutingAndPages;
