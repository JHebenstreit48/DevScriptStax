import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StaticAssets = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/AssetsAndStyling/StaticAssets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Static Assets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticAssets;
