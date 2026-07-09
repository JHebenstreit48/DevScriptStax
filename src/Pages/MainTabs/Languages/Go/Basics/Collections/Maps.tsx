import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Maps = () => {
  const markdownFilePath = 'Languages/Go/Basics/Collections/Maps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Maps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Maps;
