import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
