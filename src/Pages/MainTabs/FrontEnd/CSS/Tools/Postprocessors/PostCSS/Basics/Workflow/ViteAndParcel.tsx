import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ViteAndParcel = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Workflow/ViteAndParcel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vite & Parcel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViteAndParcel;
