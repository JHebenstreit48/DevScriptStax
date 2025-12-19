import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MediaQueries = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/ResponsiveAndVariables/MediaQueries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Media Queries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MediaQueries;
