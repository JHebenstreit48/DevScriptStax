import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DropdownsAndTooltips = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Overlays/DropdownsAndTooltips';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dropdowns & Tooltips" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DropdownsAndTooltips;
