import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Semantics = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/FormsAndSemantics/Semantics';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML Forms and Semantics - Semantics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Semantics;