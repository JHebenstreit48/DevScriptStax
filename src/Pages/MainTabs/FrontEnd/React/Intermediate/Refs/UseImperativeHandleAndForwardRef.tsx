import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseImperativeHandleAndForwardRef = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/Refs/UseImperativeHandleAndForwardRef';

  return (
    <>
      <PageLayout>
        <PageTitle title="useImperativeHandle & forwardRef" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseImperativeHandleAndForwardRef;
