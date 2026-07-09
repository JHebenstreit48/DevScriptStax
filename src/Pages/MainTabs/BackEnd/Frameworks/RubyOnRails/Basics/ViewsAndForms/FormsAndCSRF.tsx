import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FormsAndCSRF = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms/FormsAndCSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="Forms & CSRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FormsAndCSRF;
