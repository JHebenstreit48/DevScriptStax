import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
