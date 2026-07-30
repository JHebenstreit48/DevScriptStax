import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StaticVsDynamicContent = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/Fundamentals/StaticVsDynamicContent';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static vs Dynamic Content" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticVsDynamicContent;
