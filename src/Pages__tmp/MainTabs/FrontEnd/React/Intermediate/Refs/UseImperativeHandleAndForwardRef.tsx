import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
