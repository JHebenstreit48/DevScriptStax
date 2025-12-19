import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AlertsAndBadges = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Feedback/AlertsAndBadges';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Alerts & Badges" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AlertsAndBadges;
