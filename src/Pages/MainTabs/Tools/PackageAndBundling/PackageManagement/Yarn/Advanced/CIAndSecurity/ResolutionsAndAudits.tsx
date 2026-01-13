import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ResolutionsAndAudits = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/CIAndSecurity/ResolutionsAndAudits';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Resolutions & Audits" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResolutionsAndAudits;
