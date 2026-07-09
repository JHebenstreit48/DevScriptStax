import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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