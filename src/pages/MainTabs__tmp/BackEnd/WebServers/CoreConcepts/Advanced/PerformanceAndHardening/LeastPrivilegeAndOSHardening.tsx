import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LeastPrivilegeAndOSHardening = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/PerformanceAndHardening/LeastPrivilegeAndOSHardening';

  return (
    <>
      <PageLayout>
        <PageTitle title="Least Privilege & OS Hardening" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LeastPrivilegeAndOSHardening;
