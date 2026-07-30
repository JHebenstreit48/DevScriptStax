import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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