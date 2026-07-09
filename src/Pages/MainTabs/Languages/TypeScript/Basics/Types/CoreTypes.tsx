import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoreTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Core';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Basics - Core Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreTypes;