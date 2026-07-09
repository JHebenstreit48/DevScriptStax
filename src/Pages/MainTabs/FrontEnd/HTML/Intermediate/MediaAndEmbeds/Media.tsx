import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MediaElements = () => {
  const markdownFilePath = 'FrontEnd/HTML/Intermediate/MediaAndEmbeds/Media';

  return (
    <>
      <PageLayout>
        <PageTitle title="Media Elements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MediaElements;