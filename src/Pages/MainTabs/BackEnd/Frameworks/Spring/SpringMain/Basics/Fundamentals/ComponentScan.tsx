import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComponentScan = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/ComponentScan';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Component Scan" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComponentScan;
