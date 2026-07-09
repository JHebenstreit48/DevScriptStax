import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LayoutsAndHeadAPI = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/CoreConcepts/LayoutsAndHeadAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Layouts & Head API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayoutsAndHeadAPI;
