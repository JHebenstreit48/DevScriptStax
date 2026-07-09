import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StaticAssets = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/AssetsAndStyling/StaticAssets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static Assets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticAssets;
