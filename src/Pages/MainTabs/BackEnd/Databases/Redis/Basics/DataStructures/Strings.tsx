import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
