import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LayoutsAndHeadAPI = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/CoreConcepts/LayoutsAndHeadAPI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Layouts & Head API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayoutsAndHeadAPI;
