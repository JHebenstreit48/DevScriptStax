import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DependencyInjection = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP/DependencyInjection';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dependency Injection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DependencyInjection;
