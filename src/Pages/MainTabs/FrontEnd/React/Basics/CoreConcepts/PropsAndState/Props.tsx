import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Props = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/CoreConcepts/PropsState/Props';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Core Concepts - Props" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Props;
