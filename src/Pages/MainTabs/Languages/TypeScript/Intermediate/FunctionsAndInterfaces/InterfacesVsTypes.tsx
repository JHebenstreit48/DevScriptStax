import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InterfacesVsTypes = () => {
  const markdownFilePath =
    'Languages/TypeScript/Intermediate/FunctionsAndInterfaces/InterfacesVsTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Intermediate - Interfaces vs Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterfacesVsTypes;