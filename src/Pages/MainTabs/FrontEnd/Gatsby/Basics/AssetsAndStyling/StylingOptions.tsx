import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StylingOptions = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/AssetsAndStyling/StylingOptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Styling Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StylingOptions;
