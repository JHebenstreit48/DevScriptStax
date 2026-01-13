import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Migrations = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ModelsAndDB/Migrations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Migrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Migrations;
