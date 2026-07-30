import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
