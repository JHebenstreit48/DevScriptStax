import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
