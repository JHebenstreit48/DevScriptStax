import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Images = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/AssetsAndStyling/Images';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Images (gatsby-plugin-image)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Images;
