import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GlobalStore = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/StoreBasics/GlobalStore';

  return (
    <>
      <PageLayout>
        <PageTitle title="Global Store" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GlobalStore;
