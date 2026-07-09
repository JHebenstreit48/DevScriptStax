import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RTLSupport = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL/RTLSupport';

  return (
    <>
      <PageLayout>
        <PageTitle title="RTL Support" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RTLSupport;
