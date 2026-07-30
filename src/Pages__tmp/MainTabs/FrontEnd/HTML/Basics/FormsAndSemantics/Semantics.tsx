import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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