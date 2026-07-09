import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
