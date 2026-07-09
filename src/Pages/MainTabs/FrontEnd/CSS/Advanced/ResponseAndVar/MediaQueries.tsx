import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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