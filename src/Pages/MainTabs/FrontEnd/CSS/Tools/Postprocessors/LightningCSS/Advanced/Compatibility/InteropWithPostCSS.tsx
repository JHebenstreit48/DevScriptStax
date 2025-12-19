import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InteropWithPostCSS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Compatibility/InteropWithPostCSS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Interop with PostCSS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InteropWithPostCSS;
