import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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