import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AlertAndToast = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Feedback/AlertAndToast';

  return (
    <>
      <PageLayout>
        <PageTitle title="Alert & Toast" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AlertAndToast;
