import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostGIS = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PostGIS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="PostGIS (Geospatial)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostGIS;
