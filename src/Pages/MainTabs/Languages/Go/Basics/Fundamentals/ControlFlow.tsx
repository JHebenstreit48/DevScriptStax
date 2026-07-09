import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ControlFlow = () => {
  const markdownFilePath = 'Languages/Go/Basics/Fundamentals/ControlFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Control Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlFlow;
