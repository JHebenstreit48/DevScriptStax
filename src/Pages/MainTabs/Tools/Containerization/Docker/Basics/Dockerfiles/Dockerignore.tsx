import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
