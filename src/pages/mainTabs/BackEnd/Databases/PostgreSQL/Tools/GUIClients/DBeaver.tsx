import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DBeaver = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/GUIClients/DBeaver';

  return (
    <>
      <PageLayout>
        <PageTitle title="DBeaver" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DBeaver;
