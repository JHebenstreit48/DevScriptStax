import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ResolutionsAndAudits = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/CIAndSecurity/ResolutionsAndAudits';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resolutions & Audits" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResolutionsAndAudits;
