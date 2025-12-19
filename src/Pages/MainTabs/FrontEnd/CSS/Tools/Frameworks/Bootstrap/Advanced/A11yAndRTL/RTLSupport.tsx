import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RTLSupport = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL/RTLSupport';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RTL Support" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RTLSupport;
