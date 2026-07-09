import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ViteWebpackParcel = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Integration/ViteWebpackParcel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vite / Webpack / Parcel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViteWebpackParcel;
