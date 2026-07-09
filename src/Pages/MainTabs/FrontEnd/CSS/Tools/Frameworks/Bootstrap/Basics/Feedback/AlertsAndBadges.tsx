import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AlertsAndBadges = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Feedback/AlertsAndBadges';

  return (
    <>
      <PageLayout>
        <PageTitle title="Alerts & Badges" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AlertsAndBadges;