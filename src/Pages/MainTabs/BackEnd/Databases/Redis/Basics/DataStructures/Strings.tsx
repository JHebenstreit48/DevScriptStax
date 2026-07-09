import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Strings = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/DataStructures/Strings';

  return (
    <>
      <PageLayout>
        <PageTitle title="Strings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Strings;
