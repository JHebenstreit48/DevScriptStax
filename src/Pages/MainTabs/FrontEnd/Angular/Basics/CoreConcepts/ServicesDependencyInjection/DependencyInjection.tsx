import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DependencyInjection = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/ServicesDependencyInjection/DependencyInjection';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dependency Injection (DI)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DependencyInjection;
