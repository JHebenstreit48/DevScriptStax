import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkingWithForms = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Forms/WorkingWithForms';

  return (
    <>
      <PageLayout>
        <PageTitle title="Working with Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithForms;
