import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PnPBasics = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PlugnPlay/PnPBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="PnP Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PnPBasics;
