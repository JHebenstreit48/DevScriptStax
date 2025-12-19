import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MediaQueryPacking = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/SpecializedTransforms/MediaQueryPacking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Media Query Packing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MediaQueryPacking;
