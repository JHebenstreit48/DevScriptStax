import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Dockerignore = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/Dockerfiles/Dockerignore';

  return (
    <>
      <PageLayout>
        <PageTitle title=".dockerignore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Dockerignore;
