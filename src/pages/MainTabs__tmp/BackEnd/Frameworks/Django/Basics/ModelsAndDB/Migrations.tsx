import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Migrations = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ModelsAndDB/Migrations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Migrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Migrations;
