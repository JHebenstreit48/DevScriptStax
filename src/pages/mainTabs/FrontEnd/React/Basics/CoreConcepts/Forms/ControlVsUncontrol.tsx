import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ControlledVsUncontrolled = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/Core/Forms/ControlledVsUncontrolled';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Basics - Controlled vs Uncontrolled Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlledVsUncontrolled;