import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Implementation = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Authentication/Implementation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Implementation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Implementation;
