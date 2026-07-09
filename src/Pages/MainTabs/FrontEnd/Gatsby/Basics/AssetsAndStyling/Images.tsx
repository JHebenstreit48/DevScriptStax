import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
