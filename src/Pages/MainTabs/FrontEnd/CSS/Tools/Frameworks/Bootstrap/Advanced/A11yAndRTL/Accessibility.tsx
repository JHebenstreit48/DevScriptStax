import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Accessibility = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL/Accessibility';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Accessibility" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Accessibility;
