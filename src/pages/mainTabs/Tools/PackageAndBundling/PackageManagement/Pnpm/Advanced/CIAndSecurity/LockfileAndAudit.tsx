import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LockfileAndAudit = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/CIAndSecurity/LockfileAndAudit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lockfile & Audit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LockfileAndAudit;
