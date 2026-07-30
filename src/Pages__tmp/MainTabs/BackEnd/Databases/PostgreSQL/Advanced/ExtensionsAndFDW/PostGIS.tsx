import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PostGIS = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PostGIS';

  return (
    <>
      <PageLayout>
        <PageTitle title="PostGIS (Geospatial)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostGIS;
