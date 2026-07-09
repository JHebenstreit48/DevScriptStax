import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProtectedRoutesAndGuards = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Auth/ProtectedRoutesAndGuards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Protected Routes & Guards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtectedRoutesAndGuards;
