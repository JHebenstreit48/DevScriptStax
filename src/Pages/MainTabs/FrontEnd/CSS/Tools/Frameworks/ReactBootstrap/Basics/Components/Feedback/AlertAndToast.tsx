import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
