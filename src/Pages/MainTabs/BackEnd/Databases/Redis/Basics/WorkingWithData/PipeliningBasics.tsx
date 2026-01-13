import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PipeliningBasics = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/WorkingWithData/PipeliningBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pipelining Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PipeliningBasics;
