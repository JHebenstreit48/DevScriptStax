import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
