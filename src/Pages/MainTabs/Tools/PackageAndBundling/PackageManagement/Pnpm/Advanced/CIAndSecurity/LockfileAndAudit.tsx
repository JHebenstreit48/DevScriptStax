import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LockfileAndAudit = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/CIAndSecurity/LockfileAndAudit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lockfile & Audit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LockfileAndAudit;
