import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WorkingWithUseRef = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/Refs/WorkingWithUseRef';

  return (
    <>
      <PageLayout>
        <PageTitle title="Working with useRef" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithUseRef;
