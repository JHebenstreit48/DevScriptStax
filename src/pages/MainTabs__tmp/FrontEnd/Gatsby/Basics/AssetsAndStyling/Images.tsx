import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Images = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/AssetsAndStyling/Images';

  return (
    <>
      <PageLayout>
        <PageTitle title="Images (gatsby-plugin-image)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Images;
