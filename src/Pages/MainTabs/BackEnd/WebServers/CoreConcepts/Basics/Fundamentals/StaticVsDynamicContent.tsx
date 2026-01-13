import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticVsDynamicContent = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/Fundamentals/StaticVsDynamicContent';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Static vs Dynamic Content" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticVsDynamicContent;
