import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DropdownsAndTooltipsAPI = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components/Overlays/DropdownsAndTooltipsAPI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dropdowns & Tooltips API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DropdownsAndTooltipsAPI;
