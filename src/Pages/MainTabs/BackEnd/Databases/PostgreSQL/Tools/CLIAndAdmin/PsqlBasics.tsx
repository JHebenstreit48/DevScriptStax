import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PsqlBasics = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/CLIAndAdmin/PsqlBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="psql Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PsqlBasics;
