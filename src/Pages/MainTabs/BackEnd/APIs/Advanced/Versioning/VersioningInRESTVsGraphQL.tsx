import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VersioningInRESTVsGraphQL = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Versioning/VersioningInRESTVsGraphQL';

  return (
    <>
      <PageLayout>
        <PageTitle title="Versioning in REST vs GraphQL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VersioningInRESTVsGraphQL;
