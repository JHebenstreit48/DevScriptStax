import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
