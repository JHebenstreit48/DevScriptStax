import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RTL = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/SpecializedTransforms/RTL';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RTL (RTLCSS)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RTL;
