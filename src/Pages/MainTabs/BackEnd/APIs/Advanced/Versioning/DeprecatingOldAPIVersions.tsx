import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeprecatingOldAPIVersions = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Versioning/DeprecatingOldAPIVersions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Deprecating Old API Versions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeprecatingOldAPIVersions;
