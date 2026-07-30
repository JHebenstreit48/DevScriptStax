import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
