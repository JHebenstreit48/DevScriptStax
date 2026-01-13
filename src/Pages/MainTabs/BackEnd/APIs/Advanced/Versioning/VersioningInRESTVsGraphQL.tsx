import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VersioningInRESTVsGraphQL = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Versioning/VersioningInRESTVsGraphQL';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Versioning in REST vs GraphQL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VersioningInRESTVsGraphQL;
