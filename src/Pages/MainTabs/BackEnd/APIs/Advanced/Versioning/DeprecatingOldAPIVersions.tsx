import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DeprecatingOldAPIVersions = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Versioning/DeprecatingOldAPIVersions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Deprecating Old API Versions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeprecatingOldAPIVersions;
