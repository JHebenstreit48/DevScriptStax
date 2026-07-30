import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ComponentScan = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/ComponentScan';

  return (
    <>
      <PageLayout>
        <PageTitle title="Component Scan" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComponentScan;
