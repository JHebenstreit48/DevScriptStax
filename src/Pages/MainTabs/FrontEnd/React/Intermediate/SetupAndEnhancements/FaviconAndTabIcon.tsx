import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
