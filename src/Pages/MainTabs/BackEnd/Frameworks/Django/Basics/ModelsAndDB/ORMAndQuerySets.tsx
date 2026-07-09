import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ORMAndQuerySets = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ModelsAndDB/ORMAndQuerySets';

  return (
    <>
      <PageLayout>
        <PageTitle title="ORM & QuerySets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ORMAndQuerySets;
