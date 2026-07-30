import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MediaQueryPacking = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/SpecializedTransforms/MediaQueryPacking';

  return (
    <>
      <PageLayout>
        <PageTitle title="Media Query Packing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MediaQueryPacking;
