import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FaviconAndTabIcon = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/SetupAndEnhancements/FaviconAndTabIcon';

  return (
    <>
      <PageLayout>
        <PageTitle title="Favicon & Tab Icon" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FaviconAndTabIcon;
