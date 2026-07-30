import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InteropWithPostCSS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Compatibility/InteropWithPostCSS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Interop with PostCSS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InteropWithPostCSS;
