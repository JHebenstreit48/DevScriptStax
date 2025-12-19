import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DisplayAndVisibility = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/DisplayAndVisibility';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Display & Visibility" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DisplayAndVisibility;
