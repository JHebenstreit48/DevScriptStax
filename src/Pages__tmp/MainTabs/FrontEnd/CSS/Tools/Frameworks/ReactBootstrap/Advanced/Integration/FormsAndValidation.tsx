import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FormsAndValidation = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Integration/FormsAndValidation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Forms & Validation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FormsAndValidation;
