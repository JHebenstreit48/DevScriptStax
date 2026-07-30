import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ArraysAndSlices = () => {
  const markdownFilePath = 'Languages/Go/Basics/Collections/ArraysAndSlices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Arrays & Slices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ArraysAndSlices;
