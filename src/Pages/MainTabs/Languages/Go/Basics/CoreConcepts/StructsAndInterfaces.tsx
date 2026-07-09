import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StructsAndInterfaces = () => {
  const markdownFilePath = 'Languages/Go/Basics/CoreConcepts/StructsAndInterfaces';

  return (
    <>
      <PageLayout>
        <PageTitle title="Structs & Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructsAndInterfaces;
