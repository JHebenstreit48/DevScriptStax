import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebAccessibility = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/WebAccessibility';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced HTML - Web Accessibility" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebAccessibility;