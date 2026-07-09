import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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