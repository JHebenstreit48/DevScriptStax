import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkingWithForms = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Forms/WorkingWithForms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Working with Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithForms;
