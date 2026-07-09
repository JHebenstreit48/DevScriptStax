import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StylingOptions = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/AssetsAndStyling/StylingOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Styling Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StylingOptions;
