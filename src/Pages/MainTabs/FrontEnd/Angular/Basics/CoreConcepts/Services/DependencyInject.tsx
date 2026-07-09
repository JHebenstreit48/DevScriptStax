import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DependencyInject = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/ServicesNotes/DependencyInjection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Services - Dependency Injection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DependencyInject;