import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
