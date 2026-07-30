import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Accessibility = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL/Accessibility';

  return (
    <>
      <PageLayout>
        <PageTitle title="Accessibility" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Accessibility;
