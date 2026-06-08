import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Dropdowns = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Dropdowns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Frameworks - Bootstrap - Dropdowns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Dropdowns;