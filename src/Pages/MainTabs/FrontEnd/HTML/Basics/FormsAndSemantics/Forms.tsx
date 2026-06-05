import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Forms = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/FormsAndSemantics/Forms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTML Forms and Semantics - Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Forms;