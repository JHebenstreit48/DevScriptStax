import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModelForms = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Forms/ModelForms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Model Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelForms;
