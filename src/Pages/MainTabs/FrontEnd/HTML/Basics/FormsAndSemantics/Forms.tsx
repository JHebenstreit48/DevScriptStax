import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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