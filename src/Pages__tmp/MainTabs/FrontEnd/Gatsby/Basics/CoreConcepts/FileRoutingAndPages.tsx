import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FileRoutingAndPages = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/CoreConcepts/FileRoutingAndPages';

  return (
    <>
      <PageLayout>
        <PageTitle title="File Routing & Pages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileRoutingAndPages;
