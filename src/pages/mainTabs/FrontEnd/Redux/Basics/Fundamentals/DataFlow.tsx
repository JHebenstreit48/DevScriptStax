import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DataFlow = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/Fundamentals/DataFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataFlow;
