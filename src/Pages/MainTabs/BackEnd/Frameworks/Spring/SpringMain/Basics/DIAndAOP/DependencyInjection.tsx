import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DependencyInjection = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP/DependencyInjection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dependency Injection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DependencyInjection;
