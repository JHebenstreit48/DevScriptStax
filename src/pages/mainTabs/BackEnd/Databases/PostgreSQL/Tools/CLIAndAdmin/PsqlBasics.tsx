import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
