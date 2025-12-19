import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ViteAndParcel = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Workflow/ViteAndParcel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Vite & Parcel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViteAndParcel;
