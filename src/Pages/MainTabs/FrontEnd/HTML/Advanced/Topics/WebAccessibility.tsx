import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebAccessibility = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/WebAccessibility';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Advanced HTML - Web Accessibility" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebAccessibility;