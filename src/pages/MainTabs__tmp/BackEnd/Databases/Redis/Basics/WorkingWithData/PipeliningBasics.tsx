import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PipeliningBasics = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/WorkingWithData/PipeliningBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pipelining Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PipeliningBasics;
