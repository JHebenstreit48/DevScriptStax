import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MediaQueries = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/ResponseAndVariables/MediaQueries';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Responsiveness - Media Queries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MediaQueries;