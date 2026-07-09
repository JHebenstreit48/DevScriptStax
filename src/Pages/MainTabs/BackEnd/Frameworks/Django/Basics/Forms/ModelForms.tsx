import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModelForms = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Forms/ModelForms';

  return (
    <>
      <PageLayout>
        <PageTitle title="Model Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelForms;
