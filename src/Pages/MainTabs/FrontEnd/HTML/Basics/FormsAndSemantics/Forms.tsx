import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Forms = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/FormsAndSemantics/Forms';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML Forms and Semantics - Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Forms;