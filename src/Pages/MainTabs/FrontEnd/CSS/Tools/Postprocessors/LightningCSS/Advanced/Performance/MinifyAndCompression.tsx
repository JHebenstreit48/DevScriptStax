import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MinifyAndCompression = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Performance/MinifyAndCompression';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Minify & Compression" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MinifyAndCompression;
