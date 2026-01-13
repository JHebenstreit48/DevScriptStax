import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypesOfServers = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/Fundamentals/TypesOfServers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Types of Servers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypesOfServers;
