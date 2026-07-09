import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
