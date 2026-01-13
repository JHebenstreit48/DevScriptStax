import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StructsAndInterfaces = () => {
  const markdownFilePath = 'Languages/Go/Basics/CoreConcepts/StructsAndInterfaces';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Structs & Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StructsAndInterfaces;
