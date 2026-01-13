import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ORMAndQuerySets = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ModelsAndDB/ORMAndQuerySets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ORM & QuerySets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ORMAndQuerySets;
