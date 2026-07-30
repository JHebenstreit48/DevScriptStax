import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProtocolsAndLinking = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/WorkspacesDeepDive/ProtocolsAndLinking';

  return (
    <>
      <PageLayout>
        <PageTitle title="Protocols & Linking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolsAndLinking;
