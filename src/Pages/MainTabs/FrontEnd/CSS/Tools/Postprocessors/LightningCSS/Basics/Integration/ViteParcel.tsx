import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ViteParcel = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Integration/ViteParcel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Vite / Parcel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViteParcel;
