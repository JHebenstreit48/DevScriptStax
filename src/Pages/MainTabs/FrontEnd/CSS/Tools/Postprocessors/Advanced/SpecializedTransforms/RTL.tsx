import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RTL = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/SpecializedTransforms/RTL';

  return (
    <>
      <PageLayout>
        <PageTitle title="RTL (RTLCSS)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RTL;
