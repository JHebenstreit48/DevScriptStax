import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InterfacesAndDeclarations = () => {
  const markdownFilePath =
    'Languages/TypeScript/Basics/Types/InterfacesAndDeclare';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Basics - Interfaces & Declarations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterfacesAndDeclarations;