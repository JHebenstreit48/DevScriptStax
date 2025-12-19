import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FormsAndValidation = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Integration/FormsAndValidation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Forms & Validation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FormsAndValidation;
