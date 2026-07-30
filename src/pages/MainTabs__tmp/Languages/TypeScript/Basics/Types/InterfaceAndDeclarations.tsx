import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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