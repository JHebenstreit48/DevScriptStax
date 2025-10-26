import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DependencyInject = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/ServicesNotes/DependencyInjection';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Services - Dependency Injection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DependencyInject;