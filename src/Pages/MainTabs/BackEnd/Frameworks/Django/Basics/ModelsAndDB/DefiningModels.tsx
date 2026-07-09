import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DefiningModels = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ModelsAndDB/DefiningModels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Defining Models" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DefiningModels;
