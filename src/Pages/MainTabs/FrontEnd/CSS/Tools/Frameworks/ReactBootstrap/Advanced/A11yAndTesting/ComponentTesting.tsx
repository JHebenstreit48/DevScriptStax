import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComponentTesting = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/A11yAndTesting/ComponentTesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Component Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComponentTesting;
