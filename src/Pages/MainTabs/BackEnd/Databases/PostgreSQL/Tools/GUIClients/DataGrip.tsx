import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DataGrip = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/GUIClients/DataGrip';

  return (
    <>
      <PageLayout>
        <PageTitle title="DataGrip" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataGrip;
