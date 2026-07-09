import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
