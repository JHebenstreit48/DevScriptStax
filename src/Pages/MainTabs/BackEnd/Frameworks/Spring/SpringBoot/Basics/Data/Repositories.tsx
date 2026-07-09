import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Repositories = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Data/Repositories';

  return (
    <>
      <PageLayout>
        <PageTitle title="Repositories" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Repositories;
