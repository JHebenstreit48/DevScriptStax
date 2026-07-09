import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
